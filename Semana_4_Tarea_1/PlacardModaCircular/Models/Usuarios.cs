using System;
using System.Collections.Generic;

namespace PlacardModaCircular.Models
{
    public class Usuarios
    {
        public int Id { get; set; }
        public string NombreCompleto { get; set; }
        public string Email { get; set; }
        public string Telefono { get; set; }
        public DateTime FechaRegistro { get; set; }

        // Relacion 1:N con Publicaciones
        public ICollection<Publicaciones> Publicaciones { get; set; } = new List<Publicaciones>();

        // Relacion 1:N con Intercambios (como ofertante)
        public ICollection<Intercambios> Intercambios { get; set; } = new List<Intercambios>();
    }
}
