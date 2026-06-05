using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;
using PlacardModaCircular.Models;

namespace PlacardModaCircular.Controllers
{
    public class PrendasController : Controller
    {
        private readonly PlacardDBContext _context;

        public PrendasController(PlacardDBContext context)
        {
            _context = context;
        }

        // GET: Prendas
        public async Task<IActionResult> Index()
        {
            var prendas = _context.Prendas.Include(p => p.Categorias);
            return View(await prendas.ToListAsync());
        }

        // GET: Prendas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null) return NotFound();

            var prenda = await _context.Prendas
                .Include(p => p.Categorias)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (prenda == null) return NotFound();

            return View(prenda);
        }

        // GET: Prendas/Create
        public IActionResult Create()
        {
            ViewData["CategoriaId"] = new SelectList(_context.Categorias, "Id", "Nombre");
            return View();
        }

        // POST: Prendas/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Nombre,Descripcion,Talla,Precio,CategoriaId")] Prendas prenda)
        {
            if (ModelState.IsValid)
            {
                _context.Add(prenda);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CategoriaId"] = new SelectList(_context.Categorias, "Id", "Nombre", prenda.CategoriaId);
            return View(prenda);
        }

        // GET: Prendas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null) return NotFound();

            var prenda = await _context.Prendas.FindAsync(id);
            if (prenda == null) return NotFound();

            ViewData["CategoriaId"] = new SelectList(_context.Categorias, "Id", "Nombre", prenda.CategoriaId);
            return View(prenda);
        }

        // POST: Prendas/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Nombre,Descripcion,Talla,Precio,CategoriaId")] Prendas prenda)
        {
            if (id != prenda.Id) return NotFound();

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(prenda);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PrendaExists(prenda.Id)) return NotFound();
                    else throw;
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["CategoriaId"] = new SelectList(_context.Categorias, "Id", "Nombre", prenda.CategoriaId);
            return View(prenda);
        }

        // GET: Prendas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null) return NotFound();

            var prenda = await _context.Prendas
                .Include(p => p.Categorias)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (prenda == null) return NotFound();

            return View(prenda);
        }

        // POST: Prendas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var prenda = await _context.Prendas.FindAsync(id);
            if (prenda != null)
            {
                _context.Prendas.Remove(prenda);
            }
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PrendaExists(int id)
        {
            return _context.Prendas.Any(e => e.Id == id);
        }
    }
}
