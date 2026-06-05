using Microsoft.EntityFrameworkCore;

namespace PlacardModaCircular.Models
{
    public class PlacardDBContext : DbContext
    {
        public PlacardDBContext(DbContextOptions<PlacardDBContext> options) : base(options) { }

        public DbSet<Categorias> Categorias { get; set; }
        public DbSet<Prendas> Prendas { get; set; }
        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Publicaciones> Publicaciones { get; set; }
        public DbSet<Intercambios> Intercambios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Categorias 1:N Prendas
            modelBuilder.Entity<Prendas>()
                .HasOne(p => p.Categorias)
                .WithMany(c => c.Prendas)
                .HasForeignKey(p => p.CategoriaId)
                .OnDelete(DeleteBehavior.Cascade);

            // Usuarios 1:N Publicaciones
            modelBuilder.Entity<Publicaciones>()
                .HasOne(p => p.Usuarios)
                .WithMany(u => u.Publicaciones)
                .HasForeignKey(p => p.UsuarioId)
                .OnDelete(DeleteBehavior.Cascade);

            // Prendas 1:N Publicaciones
            modelBuilder.Entity<Publicaciones>()
                .HasOne(p => p.Prendas)
                .WithMany(pd => pd.Publicaciones)
                .HasForeignKey(p => p.PrendaId)
                .OnDelete(DeleteBehavior.Cascade);

            // Publicaciones 1:N Intercambios
            modelBuilder.Entity<Intercambios>()
                .HasOne(i => i.Publicaciones)
                .WithMany(p => p.Intercambios)
                .HasForeignKey(i => i.PublicacionId)
                .OnDelete(DeleteBehavior.Cascade);

            // Usuarios 1:N Intercambios (ofertante)
            modelBuilder.Entity<Intercambios>()
                .HasOne(i => i.Usuarios)
                .WithMany(u => u.Intercambios)
                .HasForeignKey(i => i.UsuarioOfertanteId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
