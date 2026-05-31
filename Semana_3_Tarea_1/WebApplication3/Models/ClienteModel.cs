using System.ComponentModel.DataAnnotations;

namespace WebApplication2.Models
{
    public class ClienteModel
    {
        public int id { get; set; }

        [Display(Name = "Nombres")]
        [MaxLength(100, ErrorMessage = "El maximo numero de caracteres es 100")]
        [Required(ErrorMessage = "El campo es requerido")]
        public string Nombres_Cliente { get; set; } = string.Empty;

        [Display(Name = "Apellidos")]
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
        [MaxLength(200, ErrorMessage = "El maximo numero de caracteres es 200")]
        public string Direccion { get; set; } = string.Empty;

        [Display(Name = "Teléfono")]
        [Required(ErrorMessage = "El campo es requerido")]
        [MaxLength(17, ErrorMessage = "El máximo número de caracteres es 17")]
        [MinLength(9, ErrorMessage = "El minimo de caracteres es 9")]
        public string Telefono { get; set; } = string.Empty;

        [Display(Name = "Correo Electrónico")]
        [Required(ErrorMessage = "El campo es requerido")]
        [EmailAddress(ErrorMessage = "El correo electrónico no es válido")]
        [MaxLength(150, ErrorMessage = "El maximo numero de caracteres es 150")]
        public string Correo { get; set; } = string.Empty;

        [Display(Name = "Fecha de Nacimiento")]
        [Required(ErrorMessage = "El campo es requerido")]
        [DataType(DataType.Date)]
        public DateTime FechaNacimiento { get; set; }

        [Display(Name = "Género")]
        [Required(ErrorMessage = "El campo es requerido")]
        [MaxLength(20, ErrorMessage = "El maximo numero de caracteres es 20")]
        public string Genero { get; set; } = string.Empty;

        [Display(Name = "Ciudad")]
        [Required(ErrorMessage = "El campo es requerido")]
        [MaxLength(100, ErrorMessage = "El maximo numero de caracteres es 100")]
        public string Ciudad { get; set; } = string.Empty;

        [Display(Name = "Estado Civil")]
        [Required(ErrorMessage = "El campo es requerido")]
        [MaxLength(30, ErrorMessage = "El maximo numero de caracteres es 30")]
        public string EstadoCivil { get; set; } = string.Empty;

        [Display(Name = "Profesión")]
        [Required(ErrorMessage = "El campo es requerido")]
        [MaxLength(100, ErrorMessage = "El maximo numero de caracteres es 100")]
        public string Profesion { get; set; } = string.Empty;

        [Display(Name = "Nacionalidad")]
        [Required(ErrorMessage = "El campo es requerido")]
        [MaxLength(50, ErrorMessage = "El maximo numero de caracteres es 50")]
        public string Nacionalidad { get; set; } = string.Empty;

        [Display(Name = "Fecha de Registro")]
        [DataType(DataType.Date)]
        public DateTime FechaRegistro { get; set; } = DateTime.Now;
    }
}
