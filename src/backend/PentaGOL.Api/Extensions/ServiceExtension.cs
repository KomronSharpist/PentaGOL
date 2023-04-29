using PentaGOL.DAL.IRepositories;
using PentaGOL.DAL.Repositories;
using PentaGOL.Service.Interfaces;
using PentaGOL.Service.Services;

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

            services.AddScoped<ILigaService, LigaService>();
            services.AddScoped<IMatchService, MatchService>();
            services.AddScoped<INewsService, NewsService>();
            services.AddScoped<ITeamService, TeamService>();
            services.AddScoped<IAuthService, AuthService>();


            services.AddControllers();
            services.AddProblemDetails();
            services.AddExceptionHandler(options =>
            {
                options.ExceptionHandlingPath = "/api/error";
            });
        }
    }
}
