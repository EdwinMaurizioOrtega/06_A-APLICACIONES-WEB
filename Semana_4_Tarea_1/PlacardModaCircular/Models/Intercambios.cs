using System;

namespace PlacardModaCircular.Models
{
    public class Intercambios
    {
        public int Id { get; set; }
        public string Mensaje { get; set; }
        public DateTime FechaIntercambio { get; set; }
        public string Estado { get; set; }  // "Pendiente", "Aceptado", "Rechazado"

        // FK a Usuarios (quien oferta)
        public int UsuarioOfertanteId { get; set; }
        public Usuarios Usuarios { get; set; }

        // FK a Publicaciones
        public int PublicacionId { get; set; }
        public Publicaciones Publicaciones { get; set; }
    }
}
