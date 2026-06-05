using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;
using PlacardModaCircular.Models;

namespace PlacardModaCircular.Controllers
{
    public class PublicacionesController : Controller
    {
        private readonly PlacardDBContext _context;

        public PublicacionesController(PlacardDBContext context)
        {
            _context = context;
        }

        // GET: Publicaciones
        public async Task<IActionResult> Index()
        {
            var publicaciones = _context.Publicaciones
                .Include(p => p.Usuarios)
                .Include(p => p.Prendas);
            return View(await publicaciones.ToListAsync());
        }

        // GET: Publicaciones/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null) return NotFound();

            var publicacion = await _context.Publicaciones
                .Include(p => p.Usuarios)
                .Include(p => p.Prendas)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (publicacion == null) return NotFound();

            return View(publicacion);
        }

        // GET: Publicaciones/Create
        public IActionResult Create()
        {
            ViewData["UsuarioId"] = new SelectList(_context.Usuarios, "Id", "NombreCompleto");
            ViewData["PrendaId"] = new SelectList(_context.Prendas, "Id", "Nombre");
            return View();
        }

        // POST: Publicaciones/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,PrecioOferta,Descripcion,FechaPublicacion,Estado,UsuarioId,PrendaId")] Publicaciones publicacion)
        {
            if (ModelState.IsValid)
            {
                _context.Add(publicacion);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["UsuarioId"] = new SelectList(_context.Usuarios, "Id", "NombreCompleto", publicacion.UsuarioId);
            ViewData["PrendaId"] = new SelectList(_context.Prendas, "Id", "Nombre", publicacion.PrendaId);
            return View(publicacion);
        }

        // GET: Publicaciones/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) return NotFound();

            var publicacion = await _context.Publicaciones.FindAsync(id);
            if (publicacion == null) return NotFound();

            ViewData["UsuarioId"] = new SelectList(_context.Usuarios, "Id", "NombreCompleto", publicacion.UsuarioId);
            ViewData["PrendaId"] = new SelectList(_context.Prendas, "Id", "Nombre", publicacion.PrendaId);
            return View(publicacion);
        }

        // POST: Publicaciones/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,PrecioOferta,Descripcion,FechaPublicacion,Estado,UsuarioId,PrendaId")] Publicaciones publicacion)
        {
            if (id != publicacion.Id) return NotFound();

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(publicacion);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PublicacionExists(publicacion.Id)) return NotFound();
                    else throw;
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["UsuarioId"] = new SelectList(_context.Usuarios, "Id", "NombreCompleto", publicacion.UsuarioId);
            ViewData["PrendaId"] = new SelectList(_context.Prendas, "Id", "Nombre", publicacion.PrendaId);
            return View(publicacion);
        }

        // GET: Publicaciones/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null) return NotFound();

            var publicacion = await _context.Publicaciones
                .Include(p => p.Usuarios)
                .Include(p => p.Prendas)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (publicacion == null) return NotFound();

            return View(publicacion);
        }

        // POST: Publicaciones/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var publicacion = await _context.Publicaciones.FindAsync(id);
            if (publicacion != null)
            {
                _context.Publicaciones.Remove(publicacion);
            }
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PublicacionExists(int id)
        {
            return _context.Publicaciones.Any(e => e.Id == id);
        }
    }
}
