using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TicketManagmentSystem.Models;

public interface ITicketService
{
    Task<IEnumerable<Ticket>> GetAllTicketsAsync();
    Task<Ticket> CreateAsync(Ticket ticket);
    Task<Ticket?> GetByIdAsync(int id);
    Task<bool> DeleteAsync(int id);
    Task<bool> UpdateAsync(int id, UpdateTicketDto updateDto);
    Task<bool> UseTicketAsync(int id, TicketStatus UpdateTo);
}

public class TicketService : ITicketService 
{
    private readonly TicketDbContext _context;

    public TicketService(TicketDbContext context)
    {
        _context = context;
    }

    public async Task<Ticket> CreateAsync(Ticket ticket)
    {
        _context.tickets.Add(ticket);
        await _context.SaveChangesAsync();
        return ticket;
    }

    public async Task<Ticket?> GetByIdAsync(int id)
    {
        return await _context.tickets.FirstOrDefaultAsync(t => t.Id == id);
    }

    public async Task<bool> DeleteAsync(int id)
    {
        var ticket = await GetByIdAsync(id);
        if ( ticket == null ) return false;

        _context.tickets.Remove(ticket);
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> UpdateAsync(int id, UpdateTicketDto updateDto)
    {
        var ticket = await GetByIdAsync(id);
        if (ticket == null) return false;
        
        if(updateDto.Title != null) ticket.Title = updateDto.Title;
        if(updateDto.Description != null) ticket.Description = updateDto.Description;
        if(updateDto.Priority.HasValue) ticket.Priority = updateDto.Priority.Value;
        if(updateDto.Status.HasValue) ticket.Status = updateDto.Status.Value;
        
        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<bool> UseTicketAsync(int id, TicketStatus UpdateTo)
    {
        var ticket = await GetByIdAsync(id);
        if(ticket == null ) return false;

        if(ticket.Status == TicketStatus.Done) return false;
        ticket.Status = UpdateTo;

        await _context.SaveChangesAsync();
        return true;
    }

    public async Task<IEnumerable<Ticket>> GetAllTicketsAsync()
    {
        return await _context.tickets.ToListAsync();
    }
}