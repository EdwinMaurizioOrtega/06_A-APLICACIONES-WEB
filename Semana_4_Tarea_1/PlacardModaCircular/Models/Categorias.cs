using System.Collections.Generic;

namespace PlacardModaCircular.Models
{
    public class Categorias
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Icono { get; set; }
        public int Orden { get; set; }

        // Relacion 1:N con Prendas
        public ICollection<Prendas> Prendas { get; set; } = new List<Prendas>();
    }
}
