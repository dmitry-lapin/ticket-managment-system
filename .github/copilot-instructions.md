<!-- Copilot / AI agent instructions for TicketManagmentSystem -->
# TicketManagmentSystem — Copilot instructions

Purpose: Help AI coding agents be productive quickly in this repository by describing the architecture, key files, workflows, and project-specific patterns.

- **Big picture**: This is a small ASP.NET Core app (ASP.NET Core 8) that mixes MVC and a minimal JSON API.
  - App startup is in `Program.cs` where services are registered and routes configured.
  - API surface is `Controllers/TicketsController.cs` (route: `/api/tickets`).
  - MVC entry `HomeController` returns a view for the UI entry point.
  - Business logic lives in `Services/TicketService.cs` implementing `ITicketService` and uses an in-memory `List<Ticket>` as storage.
  - DTOs / models are in `Models/Ticketmodel.cs` (`Ticket`, `TicketStatus`).

- **Service boundaries & data flow**:
  - Controllers call `ITicketService` for all ticket operations. The service is registered as a **singleton** in `Program.cs` (`builder.Services.AddSingleton<ITicketService, TicketService>();`).
  - Because the service is a singleton and uses in-memory lists, any state changes persist only while the process runs; there is no external DB.

- **Important implementation details and patterns**:
  - ID allocation: `TicketService.Create` assigns IDs using `Max(t => t.Id) + 1` (single-process, non-concurrent assumption).
  - API routing: `TicketsController` uses attribute routing (`[Route("api/tickets")]`); typical endpoints: `GET /api/tickets`, `GET /api/tickets/{id}`, `POST /api/tickets`, `PATCH /api/tickets/{id}`, `DELETE /api/tickets/{id}`, `POST /api/tickets/{id}/use?status=...`.
  - Responses follow conventional ASP.NET patterns: `CreatedAtAction`, `Ok()`, `NotFound()`, `NoContent()`.
  - Swagger is enabled in development in `Program.cs` (`UseSwagger`, `UseSwaggerUI`).

- **Developer workflows / commands** (from project and workspace tasks):
  - Build: `dotnet build TicketManagmentSystem.csproj`
  - Run: `dotnet run --project TicketManagmentSystem.csproj` or use the workspace task `watch` (`dotnet watch run --project ...`) for hot reload.
  - Publish: `dotnet publish TicketManagmentSystem.csproj`

- **Where to make changes for common tasks**:
  - Add persistence (DB): replace `TicketService` with a scoped service and register EF Core (change `AddSingleton` → `AddScoped` in `Program.cs`). Update `Services/TicketService.cs` to use a DbContext.
  - Extend API: modify `Controllers/TicketsController.cs`; follow its patterns for action signatures and return types.
  - Add validation: add data annotations to `Models/Ticketmodel.cs` and check `ModelState` in controller actions.

- **Project-specific gotchas for AI agents**:
  - Singleton `TicketService` means tests or multi-request behaviors may rely on in-memory state — be explicit when changing lifetime.
  - ID generation is optimistic and not thread-safe — avoid assuming atomic increments if you introduce concurrency.
  - `HomeController.Index()` returns a view; views are not present in the repository snapshot — if adding UI changes, verify the Views folder or adjusts routing.

- **Files to inspect for context/examples**:
  - `Program.cs` — service registration, Swagger, route mapping.
  - `Controllers/TicketsController.cs` — all API endpoints and usage of `ITicketService`.
  - `Services/TicketService.cs` — in-memory implementation; primary place to change business rules or persistence.
  - `Models/Ticketmodel.cs` — canonical model and `TicketStatus` enum.

- **Suggested actions for agents**:
  - Before editing, run `dotnet build` and optionally `dotnet watch run` to check runtime behavior.
  - When adding persistence or changing lifetimes, update `Program.cs` registration and ensure migration scripts or EF configuration are added.
  - Keep changes minimal and follow existing return patterns (e.g., `CreatedAtAction` for POST).

If anything in these notes is unclear or you'd like additional examples (unit tests, EF migration steps, or a scaffolded DbContext), tell me which area to expand. 
