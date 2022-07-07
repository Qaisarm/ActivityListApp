using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using activityListAPI.Data;
using activityListAPI.Models;

namespace WebAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class ActivityListController : ControllerBase
{

    private readonly ActivityListAppContext _context; 
    public ActivityListController(ActivityListAppContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
       return Ok(_context.ActivityListModel);
    }
     [HttpPost]
     public async Task<IActionResult> Add(CreateListItem request )
     {
         var activityModel = new ActivityListModel() {
            Title = request.Title,
             Category = request.Category,
              DateOpened = request.DateOpened,
            ExpiryDate = request.ExpiryDate
               };
         _context.ActivityListModel.Add(activityModel);
                 await _context.SaveChangesAsync();
        return Ok(_context.ActivityListModel);
    }
     [HttpDelete("{id}")]
     public async Task<IActionResult> Delete(int id)
     {
if (id == 0) return NotFound();
var listItem = new ActivityListModel(){
  Id = id
};
_context.ActivityListModel.Remove(listItem);
  await _context.SaveChangesAsync();
  return Ok();

}
}
