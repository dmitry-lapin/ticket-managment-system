using Microsoft.AspNetCore.Mvc;
using TicketManagmentSystem.Models;

public interface ITicketService
{
    IEnumerable<Ticket> GetAllTickets();
    Ticket Create(Ticket ticket);
    Ticket? GetById(int id);
    bool Delete(int id);
    bool Update(int id, Ticket UpdateTicket);
    bool UseTicket(int id, TicketStatus UpdateTo);
}

public class TicketService : ITicketService 
{
    private List<Ticket> _tickets = new List<Ticket>();

    public Ticket Create(Ticket ticket)
    {
        ticket.Id = _tickets.Count() > 0 ? ticket.Id = _tickets.Max(t => t.Id) + 1 : 1;
        _tickets.Add(ticket);

        return ticket;
    }

    public Ticket? GetById(int id)
    {
        return _tickets.FirstOrDefault(ticket => ticket.Id == id);
    }

    public bool Delete(int id)
    {
        var ticket = GetById(id);
        if ( ticket == null ) return false;
        _tickets.Remove(ticket);
        return true;
    }

    public bool Update(int id, Ticket UpdatedTicket)
    {
        var ticket = GetById(id);
        if (ticket == null) return false;
        ticket.Title = UpdatedTicket.Title;
        ticket.Description = UpdatedTicket.Description;
        ticket.Priority = UpdatedTicket.Priority;
        ticket.Status = UpdatedTicket.Status;
        
        return true;
    }

    public bool UseTicket(int id, TicketStatus UpdateTo)
    {
        var ticket = GetById(id);
        if(ticket == null ) return false;

        ticket.Status = UpdateTo;
        return true;
    }

    public IEnumerable<Ticket> GetAllTickets()
    {
        return _tickets;
    }
}