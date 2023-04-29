using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Domain.Configurations;

public class PaginationParams
{
    private const int _maxPageSize = 20;
    private int _pageSize;
    public int PageSize
    {
        get => _pageSize;
        set => _pageSize = value > _maxPageSize ? _maxPageSize : value;
    }
    public int PageIndex { get; set; }
}
