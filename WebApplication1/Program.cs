using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<APIDBContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
   
{
    app.UseSwagger();
    app.UseSwaggerUI();

}

app.UseHttpsRedirection();

app.UseCors("Access-Control-Allow-Origin");

app.Use(async (ctx, next) =>
{
    await next();
    if (ctx.Response.StatusCode == 404)
    {
        ctx.Response.ContentLength = 0;
    }

});
app.UseCors(options =>
options.WithOrigins("http://localhost:4200")
  .AllowAnyMethod()
  .AllowAnyHeader()); 
// UseCors

app.UseAuthorization();
app.UseCors("Access-Control-Allow-Origin");

app.MapControllers();

app.Run();
