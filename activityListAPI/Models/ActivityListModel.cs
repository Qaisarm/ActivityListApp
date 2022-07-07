using System.ComponentModel.DataAnnotations;

namespace activityListAPI.Models;

public class ActivityListModel
{
    public int? Id {get; set;}
    public string? Title {get; set;}
     public string? Category {get; set;}

[DataType(DataType.Date)]
      public DateTime? DateOpened { get; set; }
[DataType(DataType.Date)]
       public DateTime? ExpiryDate { get; set; }
}