using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using trees_of_knowledge.Models;


namespace trees_of_knowledge.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult NewNote()
    {
        return View();
    }

    [HttpPost]
    public IActionResult SaveForest(string subject, DateTime date, string title, string note)
    {
        TempData["Subject"] = subject;
        TempData["Date"] = date;
        TempData["Title"] = title;
        TempData["Note"] = note;
        return RedirectToAction("NewNote");
    }

    // public IActionResult Forest()
    // {
    // future: generate a forest with input data. Each tree would represent a note. 
    //     string? subject = TempData["Subject"] as string;
    //     DateTime? date = TempData["Date"] as DateTime?;
    //     string? title = TempData["Title"] as string;
    //     string? note = TempData["Note"] as string;
    //     
    //     ViewBag.Subject = subject;
    //     ViewBag.Date = date;
    //     ViewBag.Title = title;
    //     return View();
    // }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
