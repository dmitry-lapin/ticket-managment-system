# ===== STAGE 1: Build Frontend (Vite) =====
FROM node:20-alpine AS frontend
WORKDIR /src/frontend

# Копируем зависимости для кеширования
COPY frontend/package*.json ./
RUN npm ci

# Копируем исходники и билдим
COPY frontend/ .
RUN npm run build

# ===== STAGE 2: Build Backend (.NET 8) =====
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS backend
WORKDIR /src

# Restore .NET
COPY backend/TicketManagmentSystem.csproj backend/
RUN dotnet restore backend/TicketManagmentSystem.csproj
COPY backend/ backend/

# 🔥 КОПИРУЕМ VIT E BUILD (dist/)
RUN mkdir -p backend/wwwroot
COPY --from=frontend /src/frontend/dist/ backend/wwwroot/

# Публикуем
RUN dotnet publish backend/TicketManagmentSystem.csproj -c Release -o /app/publish

# ===== STAGE 3: Runtime =====
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=backend /app/publish .
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
ENTRYPOINT ["dotnet", "TicketManagmentSystem.dll"]
