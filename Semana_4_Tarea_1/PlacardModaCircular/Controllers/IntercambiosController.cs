using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;
using PlacardModaCircular.Models;

namespace PlacardModaCircular.Controllers
{
    public class IntercambiosController : Controller
    {
        private readonly PlacardDBContext _context;

        public IntercambiosController(PlacardDBContext context)
        {
            _context = context;
        }

        // GET: Intercambios
        public async Task<IActionResult> Index()
        {
            var intercambios = _context.Intercambios
                .Include(i => i.Usuarios)
                .Include(i => i.Publicaciones);
            return View(await intercambios.ToListAsync());
        }

        // GET: Intercambios/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null) return NotFound();

            var intercambio = await _context.Intercambios
                .Include(i => i.Usuarios)
                .Include(i => i.Publicaciones)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (intercambio == null) return NotFound();

            return View(intercambio);
        }

        // GET: Intercambios/Create
        public IActionResult Create()
        {
            ViewData["UsuarioOfertanteId"] = new SelectList(_context.Usuarios, "Id", "NombreCompleto");
            ViewData["PublicacionId"] = new SelectList(_context.Publicaciones, "Id", "Descripcion");
            return View();
        }

        // POST: Intercambios/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Mensaje,FechaIntercambio,Estado,UsuarioOfertanteId,PublicacionId")] Intercambios intercambio)
        {
            if (ModelState.IsValid)
            {
                _context.Add(intercambio);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["UsuarioOfertanteId"] = new SelectList(_context.Usuarios, "Id", "NombreCompleto", intercambio.UsuarioOfertanteId);
            ViewData["PublicacionId"] = new SelectList(_context.Publicaciones, "Id", "Descripcion", intercambio.PublicacionId);
            return View(intercambio);
        }

        // GET: Intercambios/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) return NotFound();

            var intercambio = await _context.Intercambios.FindAsync(id);
            if (intercambio == null) return NotFound();

            ViewData["UsuarioOfertanteId"] = new SelectList(_context.Usuarios, "Id", "NombreCompleto", intercambio.UsuarioOfertanteId);
            ViewData["PublicacionId"] = new SelectList(_context.Publicaciones, "Id", "Descripcion", intercambio.PublicacionId);
            return View(intercambio);
        }

        // POST: Intercambios/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Mensaje,FechaIntercambio,Estado,UsuarioOfertanteId,PublicacionId")] Intercambios intercambio)
        {
            if (id != intercambio.Id) return NotFound();

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(intercambio);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!IntercambioExists(intercambio.Id)) return NotFound();
                    else throw;
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["UsuarioOfertanteId"] = new SelectList(_context.Usuarios, "Id", "NombreCompleto", intercambio.UsuarioOfertanteId);
            ViewData["PublicacionId"] = new SelectList(_context.Publicaciones, "Id", "Descripcion", intercambio.PublicacionId);
            return View(intercambio);
        }

        // GET: Intercambios/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null) return NotFound();

            var intercambio = await _context.Intercambios
                .Include(i => i.Usuarios)
                .Include(i => i.Publicaciones)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (intercambio == null) return NotFound();

            return View(intercambio);
        }

        // POST: Intercambios/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var intercambio = await _context.Intercambios.FindAsync(id);
            if (intercambio != null)
            {
                _context.Intercambios.Remove(intercambio);
            }
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool IntercambioExists(int id)
        {
            return _context.Intercambios.Any(e => e.Id == id);
        }
    }
}
