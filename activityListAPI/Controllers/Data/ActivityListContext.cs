using Microsoft.EntityFrameworkCore;

using activityListAPI.Models;
namespace activityListAPI.Data;

  public class ActivityListAppContext : DbContext
    {
        // public DbSet<Address> Address { get; set; }
        // public DbSet<Customer> Customers { get; set; }

        // Create a Table:
        // public DbSet<Model> TableName { get; set; }
          public ActivityListAppContext(DbContextOptions<ActivityListAppContext> options)
      : base(options)
  {
  }
        public DbSet<ActivityListModel>? ActivityListModel { get; set; }
        
        
    }