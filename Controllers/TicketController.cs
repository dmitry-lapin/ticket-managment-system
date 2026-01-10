using Microsoft.AspNetCore.Mvc;

namespace TicketManagmentSystem.Controllers
{
    public class TicketController : Controller
    {

        [HttpGet]
        public string GetTickets()
        {
            return "";
        }

        [HttpPost]
        public int CreateTicket()
        {
            return 0;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}
