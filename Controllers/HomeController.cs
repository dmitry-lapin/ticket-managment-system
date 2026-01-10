using Microsoft.AspNetCore.Mvc;

namespace TicketManagmentSystem.Controllers
{
    public class HomeController : Controller
    {
            public IActionResult Index()
            {
                return View();
            }
    }
}