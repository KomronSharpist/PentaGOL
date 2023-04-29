using PentaGOL.DAL.IRepositories;
using PentaGOL.DAL.Repositories;

namespace PentaGOL.Api.Extensions
{
    public static class ServiceExtensions
    {
        /// <summary>
        /// Add services
        /// </summary>
        /// <param name="services"></param>
        public static void AddCustomServices(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            
            services.AddControllers();
            services.AddProblemDetails();
            services.AddExceptionHandler(options =>
            {
                options.ExceptionHandlingPath = "/api/error";
            });
        }
    }
}
