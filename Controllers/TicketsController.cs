using System.Data;
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
        
        [HttpGet("{id}")]
        public IActionResult GetTicketById(int id)
        { 
            var ticket = _ticketService.GetById(id);
            if(ticket == null) return NotFound();
            else return Ok(ticket);
        }

        [HttpGet]
        public IActionResult GetAllTickets()
        {
            var tickets = _ticketService.GetAllTickets();
            return Ok(tickets);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteTicket(int id)
        {
            var result = _ticketService.Delete(id);
            if(!result) return NotFound();
            return NoContent();
        }

        [HttpPatch("{id}")]
        public IActionResult UpdateTicket(int id, [FromBody] UpdateTicketDto updateDto)
        {
            var result = _ticketService.Update(id, updateDto);
            if(!result) return NotFound();
            return Ok(updateDto);
        }

        [HttpPost]
        public IActionResult CreateTicket([FromBody]Ticket ticket)
        {
            var createdTicket = _ticketService.Create(ticket);
            return CreatedAtAction(nameof(GetTicketById), new { id = createdTicket.Id}, createdTicket);
        }
        
        [HttpPost("{id}/use")]
        public IActionResult UseTicket(int id, [FromQuery] TicketStatus status)
        {
            var result = _ticketService.UseTicket(id, status);
            if(!result) return NotFound();
            return Ok(_ticketService.GetById(id));
        }
    }
}
