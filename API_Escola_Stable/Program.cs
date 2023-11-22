using API_Uni_Func.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<UniDbContext>(); // Olhar a dependencia (dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL)

builder.Services.AddCors(); // cors FRONT END

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection(); causa um erro caso nao esteja comentado

app.UseCors(opcoes => opcoes.AllowAnyOrigin().AllowAnyHeader()); // useCors FRONT END

app.UseAuthorization();

app.MapControllers();

app.Run();
