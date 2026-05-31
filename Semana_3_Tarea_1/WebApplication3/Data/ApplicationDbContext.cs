using Microsoft.EntityFrameworkCore;
using WebApplication2.Models;

namespace WebApplication2.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<ClienteModel> ClienteModels { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Configurar ClienteModel
            modelBuilder.Entity<ClienteModel>(entity =>
            {
                entity.ToTable("Clientes");

                // Convertir DateTime a UTC automáticamente antes de guardar
                entity.Property(c => c.FechaNacimiento)
                    .HasConversion(
                        v => DateTime.SpecifyKind(v, DateTimeKind.Utc),
                        v => v
                    );

                entity.Property(c => c.FechaRegistro)
                    .HasConversion(
                        v => DateTime.SpecifyKind(v, DateTimeKind.Utc),
                        v => v
                    );
            });
        }
    }
}
