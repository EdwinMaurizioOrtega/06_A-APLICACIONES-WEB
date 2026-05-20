using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class ClienteModel
    {
        //[key]  para definir la clave primaria public int id { get; set; }

        public int id { get; set; }

        [Display(Name = "Nombres")]
        [MaxLength(100, ErrorMessage = "El maximo numero de caracteres es 100")]
        [Required(ErrorMessage = "El campo es requerido")]
        public string Nombres_Cliente { get; set; } = string.Empty;

        [MaxLength(100, ErrorMessage = "El maximo numero de caracteres es 100")]
        [Required(ErrorMessage = "El campo es requerido")]
        public string Apellidos { get; set; } = string.Empty;

        [Display(Name = "Cédula")]
        [Required(ErrorMessage = "El campo es requerido")]
        [MaxLength(10, ErrorMessage = "El maximo numero de caracteres es 10")]
        [MinLength(10, ErrorMessage = "El minimo numero de caracteres es 10")]
        public string Cedula { get; set; } = string.Empty;

        [Display(Name = "Dirección")]
        [Required(ErrorMessage = "El campo es requerido")]
        public string Direccion { get; set; } = string.Empty;

        [Display(Name = "Teléfono")]
        [Required(ErrorMessage = "El campo es requerido")]
        [MaxLength(17, ErrorMessage = "El máximo número de caracteres es 17")]
        [MinLength(9, ErrorMessage = "El minimo de caracteres es 9")]
        public string Telefono { get; set; } = string.Empty;

        [Display(Name = "Correo Electrónico")]
        [EmailAddress(ErrorMessage = "El correo electrónico no es válido")]
        public string Correo { get; set; } = string.Empty;



    }
}
