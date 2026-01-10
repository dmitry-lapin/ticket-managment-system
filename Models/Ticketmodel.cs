namespace TicketManagmentSystem.Models
{
    public class Ticket {
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Description { get; set; } = "";
    public TicketStatus Status { get; set; }
    public int Priority { get; set; }
    public DateTime CreatedAt { get; set; }
    }

    public enum TicketStatus {
        Open,
        InProgress,
        Done
    }
}