using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace activityListAPI.Models;

public class CreateListItem
{
    [JsonPropertyName("title")]
    public string? Title {get; set;}

 [JsonPropertyName("category")]
    public string? Category {get; set;}
 [JsonPropertyName("dateOpened"), DataType(DataType.Date)]
 
     public DateTime DateOpened { get; set; }
 [JsonPropertyName("expiryDate"), DataType(DataType.Date)]
    public DateTime ExpiryDate { get; set; }
   
}