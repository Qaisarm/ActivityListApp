using Microsoft.EntityFrameworkCore;
namespace activityListAPI.Data;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new ActivityListAppContext (
        serviceProvider.GetRequiredService<
        DbContextOptions<ActivityListAppContext >>()))
        {
            // Look for any movies.
            if (context.ActivityListModel.Any()) { return; }
            context.ActivityListModel.AddRange(
            new Models.ActivityListModel
            {
                Title = "Fish Nuggets",
                Category = "Food",
                DateOpened = DateTime.Parse("2022-12-12"),
                ExpiryDate = DateTime.Parse("2023-2-22")
            },
            new Models.ActivityListModel
            {
                Title = "Pasta de los campos",
                Category = "Food",
                DateOpened = DateTime.Parse("2022-4-12"),
                ExpiryDate = DateTime.Parse("2023-2-12")
            },
            new Models.ActivityListModel
            {
                Title = "De Vinci",
                Category = "Cosmetics",
                DateOpened = DateTime.Parse("2022-5-12"),
                ExpiryDate = DateTime.Parse("2023-2-12")
            }
            // and more
            );
            context.SaveChanges();
        }
    }
}