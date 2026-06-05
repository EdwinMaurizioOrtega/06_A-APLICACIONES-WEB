using Microsoft.EntityFrameworkCore;
using PlacardModaCircular.Models;

var builder = WebApplication.CreateBuilder(args);

var cn = builder.Configuration.GetConnectionString("cn");
builder.Services.AddDbContext<PlacardDBContext>(op => op.UseNpgsql(cn));

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseRouting();

app.UseAuthorization();

app.MapStaticAssets();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}")
    .WithStaticAssets();


app.Run();
