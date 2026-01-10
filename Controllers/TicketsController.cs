using System.Net.Sockets;
using Microsoft.AspNetCore.Mvc;
using TicketManagmentSystem.Models;

namespace TicketManagmentSystem.Controllers
{
    [ApiController]
    [Route("api/tickets")]
    public class TicketsController : ControllerBase
    {
        private readonly ITicketService _ticketService;
        public TicketsController(ITicketService ticketService)
        {
            _ticketService = ticketService;
        }

        public List<string> tickets = new List<string>() { "12345", "23456", "34567"};
        
        [HttpGet("{id}")]
        public IActionResult GetTicketById(string id)
        { 
            if(tickets.Contains(id))  return Ok("ticket was found");
            else { return NotFound("Ticket wasn't found."); }
        }

        [HttpGet]
        public IActionResult GetAllTickets()
        {
            var tickets = _ticketService.GetAllTickets();
            return Ok(tickets);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTicket(string id)
        {
            tickets.Remove(id);
            return Ok("Ticket was deleted.");
        }

        [HttpPatch("{id}")]
        public IActionResult UpdateTicket(string id)
        {
            return Ok("ticket was updated.");
        }

        [HttpPost]
        public IActionResult CreateTicket()
        {
            
            return Ok("Ticket was succesfully added to a chunk.");
        }
        
        [HttpPost("{id}/use")]
        public IActionResult UseTicket(string id)
        {
            return CreatedAtAction("", tickets);
        }
    }
}
