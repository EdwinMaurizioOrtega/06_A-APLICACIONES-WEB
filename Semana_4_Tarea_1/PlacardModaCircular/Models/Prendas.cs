using System.Collections.Generic;

namespace PlacardModaCircular.Models
{
    public class Prendas
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Talla { get; set; }
        public decimal Precio { get; set; }

        // FK a Categorias
        public int CategoriaId { get; set; }
        public Categorias Categorias { get; set; }

        // Relacion 1:N con Publicaciones
        public ICollection<Publicaciones> Publicaciones { get; set; } = new List<Publicaciones>();
    }
}
