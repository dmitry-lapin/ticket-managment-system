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
        public async Task<IActionResult> GetTicketByIdAsync(int id)
        { 
            var ticket = await _ticketService.GetByIdAsync(id);
            if(ticket == null) return NotFound();
            else return Ok(ticket);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTicketsAsync()
        {
            var tickets = await _ticketService.GetAllTicketsAsync();
            return Ok(tickets);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTicketAsync(int id)
        {
            var result = await _ticketService.DeleteAsync(id);

            if(!result) return NotFound();
            
            return NoContent();
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> UpdateTicketAsync(int id, [FromBody] UpdateTicketDto updateDto)
        {
            var result = await _ticketService.UpdateAsync(id, updateDto);

            if(!result) return NotFound();

            return NoContent();
        }

        [HttpPost]
        public async Task<IActionResult> CreateTicketAsync([FromBody]CreateTicketDto CreateDto)
        {
            var Ticket = new Ticket
            {
                Title = CreateDto.Title,
                Description = CreateDto.Description ?? string.Empty,
                Priority = CreateDto.Priority,
                Status = TicketStatus.Open
            };

            var createdTicket = await _ticketService.CreateAsync(Ticket);
            return CreatedAtAction(nameof(GetTicketByIdAsync), new { id = createdTicket.Id }, createdTicket);
        }
        
        [HttpPost("{id}/use")]
        public async Task<IActionResult> UseTicketAsync(int id, [FromBody]UseTicketDto UseDto)
        {
            var result = await _ticketService.UseTicketAsync(id, UseDto.Status);
            if(!result) return NotFound();
            return Ok(_ticketService.GetByIdAsync(id));
        }
    }
}
