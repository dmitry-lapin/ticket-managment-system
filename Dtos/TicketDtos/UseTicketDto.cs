using TicketManagmentSystem.Models;
using System.ComponentModel.DataAnnotations;

public class UseTicketDto
{
    [Required]
    public TicketStatus Status { get; set; }
}