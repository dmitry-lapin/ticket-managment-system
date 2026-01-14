using System.ComponentModel.DataAnnotations;

public class CreateTicketDto {
    [Required]
    [MaxLength(100)]
    public string Title { get; set; } = "";
    [MaxLength(500)]
    public string? Description { get; set; } = "";
    [Range(1,5)]
    public int Priority { get; set; }
}