using Microsoft.EntityFrameworkCore;
using TicketManagmentSystem.Models;


public class TicketDbContext : DbContext
{
    public TicketDbContext(DbContextOptions<TicketDbContext> dbOptions) 
        : base(dbOptions)
    {
        
    }

    public DbSet<Ticket> tickets { get; set; }
}