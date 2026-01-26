# ===== STAGE 1: build front + back =====
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# 1. Копируем csproj и package.json отдельно (чтобы кешировать restore/install)
COPY backend/TicketManagmentSystem.csproj backend/
COPY frontend/package.json frontend/
COPY frontend/package-lock.json frontend/ 

# 2. Восстанавливаем .NET зависимости
RUN dotnet restore backend/TicketManagmentSystem.csproj

# 3. Ставим Node + npm (в sdk образе уже есть, если нет — можно добавить)
# Для надёжности можно зафиксировать версию Node через nvm, но для начала оставим так

# 4. Копируем остальной код
COPY backend/ backend/
COPY frontend/ frontend/

# 5. Сборка фронта
WORKDIR /src/frontend
RUN npm ci && npm run build

# 6. Копируем build фронта в wwwroot бекенда
WORKDIR /src
RUN mkdir -p backend/wwwroot \
    && cp -r frontend/build/* backend/wwwroot/

# 7. Публикация .NET приложения (Release)
RUN dotnet publish backend/TicketManagmentSystem.csproj -c Release -o /app/publish

# ===== STAGE 2: runtime =====
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

COPY --from=build /app/publish .

# Порт, на котором слушает приложение (если у тебя в Program.cs/Kestrel другой, поправь)
EXPOSE 5052

# Переменная окружения ASP.NET Core
ENV ASPNETCORE_URLS=http://+:8080

ENTRYPOINT ["dotnet", "TicketManagmentSystem.dll"]
