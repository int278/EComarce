using Microsoft.EntityFrameworkCore;

namespace FinalApi.Models
{
    public class FinalDbContext : DbContext
    {
        public DbSet<Product> Products { get; set; }
        public DbSet<UserModel> UserModel { get; set; }
        public DbSet<OrderModel> OrderModel { get; set; }

        public FinalDbContext(DbContextOptions<FinalDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModel>().ToTable("User");
            modelBuilder.Entity<Product>().ToTable("products");
            modelBuilder.Entity<OrderModel>().ToTable("order");
        }
    }
}

