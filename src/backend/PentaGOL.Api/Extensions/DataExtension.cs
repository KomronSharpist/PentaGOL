using Microsoft.EntityFrameworkCore;
using PentaGOL.DAL.Contexts;

namespace PentaGOL.Api.Extensions
{
    public static class DataExtensions
    {
        /// <summary>
        /// Automatically updated database based on latest migration
        /// </summary>
        /// <param name="app"></param>
        public static void ApplyMigrations(this WebApplication app)
        {
            using var scope = app.Services.CreateScope();
            var db = scope.ServiceProvider.GetRequiredService<PentaGolContext>();

            db.Database.Migrate();
        }
    }
}
