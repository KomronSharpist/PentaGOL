using AutoMapper;
using PentaGOL.Domain.Entities;
using PentaGOL.Service.DTOs.LigaDTOs;
using PentaGOL.Service.DTOs.MatchDTOs;
using PentaGOL.Service.DTOs.NewsDTOs;
using PentaGOL.Service.DTOs.TeamDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Service.Mappers;

public class MappingProfile : Profile
{
	public MappingProfile()
	{
        #region Liga
        
        CreateMap<LigaForCreationDto, LigaForResultDto>().ReverseMap();
		CreateMap<Liga, LigaForResultDto>().ReverseMap();
		CreateMap<LigaForCreationDto, Liga>().ReverseMap();

        #endregion

        #region Match
        
        CreateMap<MatchForCreationDto, MatchForResultDto>().ReverseMap();
        CreateMap<Match, MatchForResultDto>().ReverseMap();
        CreateMap<MatchForCreationDto, Match>().ReverseMap();

        #endregion

        #region News

        CreateMap<NewsForCreationDto, NewsForResultDto>().ReverseMap();
        CreateMap<News, NewsForResultDto>().ReverseMap();
        CreateMap<NewsForCreationDto, News>().ReverseMap();

        #endregion

        #region Team

        CreateMap<TeamForCreationDto, TeamForResultDto>().ReverseMap();
        CreateMap<Team, TeamForResultDto>().ReverseMap();
        CreateMap<TeamForCreationDto, Team>().ReverseMap();

        #endregion
    }
}
