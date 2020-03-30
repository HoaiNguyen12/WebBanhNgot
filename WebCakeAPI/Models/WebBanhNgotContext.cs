

using Microsoft.EntityFrameworkCore;

namespace WebCakeAPI.Models
{
    public class WebBanhNgotContext : DbContext
    {
        public WebBanhNgotContext(DbContextOptions<WebBanhNgotContext> options) : base(options)
        {
        }

        public DbSet<Bill> Bills { get; set; }
        public DbSet<BillDetail> Bill_details { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Users> Users { get; set; }
        public DbSet<Category> Categorys { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Bill>().ToTable("bill");
            modelBuilder.Entity<BillDetail>().ToTable("billDetail");
            modelBuilder.Entity<Customer>().ToTable("customer");
            modelBuilder.Entity<Photo>().ToTable("photo");
            modelBuilder.Entity<Product>().ToTable("product");
            modelBuilder.Entity<Users>().ToTable("users");
            modelBuilder.Entity<Category>().ToTable("category");
        }
    }
}
