using System;
using System.Collections.Generic;

namespace PlacardModaCircular.Models
{
    public class Publicaciones
    {
        public int Id { get; set; }
        public decimal PrecioOferta { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaPublicacion { get; set; }
        public string Estado { get; set; }  // "Disponible", "Intercambiado", "Cancelado"

        // FK a Usuarios
        public int UsuarioId { get; set; }
        public Usuarios Usuarios { get; set; }

        // FK a Prendas
        public int PrendaId { get; set; }
        public Prendas Prendas { get; set; }

        // Relacion 1:N con Intercambios
        public ICollection<Intercambios> Intercambios { get; set; } = new List<Intercambios>();
    }
}
