using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TicketManagmentSystem.Models;

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