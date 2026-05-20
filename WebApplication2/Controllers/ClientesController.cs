using Microsoft.AspNetCore.Mvc;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class ClientesController : Controller
    {
        // Simular una base de datos
        private static List<ClienteModel> _lista_Clientes = new List<ClienteModel>()
        {
            new ClienteModel
            {
                id = 1,
                Nombres_Cliente = "Edwin Maurizio",
                Apellidos = "Ortega Ochoa",
                Cedula = "1723456789",
                Direccion = "Cuenca",
                Telefono = "0980151017",
                Correo = "edwin.maurizio.ortega@gmail.com"
            },
            new ClienteModel
            {
                id = 2,
                Nombres_Cliente = "Fernando Manuel",
                Apellidos = "Ortiz Llerena",
                Cedula = "1723456780",
                Direccion = "Quito",
                Telefono = "0999999999",
                Correo = "fernando.ortiz@gmail.com"
            },
            new ClienteModel
            {
                id = 3,
                Nombres_Cliente = "Maria Fernanda",
                Apellidos = "Gomez Perez",
                Cedula = "1723456781",
                Direccion = "Guayaquil",
                Telefono = "0988888888",
                Correo = "maria.gomez@gmail.com"
            }
        };

        // GET: Clientes
        public ActionResult Index()
        {
            return View(_lista_Clientes.OrderBy(c => c.Apellidos));
        }

        // GET: Clientes/Details/5
        public ActionResult Details(int id)
        {
            var cliente = _lista_Clientes.FirstOrDefault(c => c.id == id);

            if (cliente == null)
                return NotFound();

            return View(cliente);
        }

        // GET: Clientes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Clientes/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(ClienteModel cliente)
        {
                    
            if (ModelState.IsValid)
            {
                cliente.id = _lista_Clientes.Count > 0
                    ? _lista_Clientes.Max(c => c.id) + 1
                    : 1;

                _lista_Clientes.Add(cliente);

                return RedirectToAction(nameof(Index));
            }

            return View(cliente);
        }

        // GET: Clientes/Edit/5
        public ActionResult Edit(int id)
        {
            var cliente = _lista_Clientes.FirstOrDefault(c => c.id == id);

            if (cliente == null)
                return NotFound();

            return View(cliente);
        }

        // POST: Clientes/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, ClienteModel cliente)
        {
            if (id != cliente.id)
                return BadRequest("No se encontró el cliente");

            if (!ModelState.IsValid)
                return View(cliente);

            var clienteExistente = _lista_Clientes.FirstOrDefault(c => c.id == id);

            if (clienteExistente == null)
                return NotFound();

            clienteExistente.Nombres_Cliente = cliente.Nombres_Cliente;
            clienteExistente.Apellidos = cliente.Apellidos;
            clienteExistente.Cedula = cliente.Cedula;
            clienteExistente.Direccion = cliente.Direccion;
            clienteExistente.Telefono = cliente.Telefono;
            clienteExistente.Correo = cliente.Correo;

            return RedirectToAction(nameof(Index));
        }

        // GET: Clientes/Delete/5
        public ActionResult Delete(int id)
        {
            var cliente = _lista_Clientes.FirstOrDefault(c => c.id == id);

            if (cliente == null)
                return NotFound();

            return View(cliente);
        }

        // POST: Clientes/Delete/5
        [HttpPost]
        [ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            var cliente = _lista_Clientes.FirstOrDefault(c => c.id == id);

            if (cliente == null)
                return NotFound();

            _lista_Clientes.Remove(cliente);

            return RedirectToAction(nameof(Index));
        }
    }
}
