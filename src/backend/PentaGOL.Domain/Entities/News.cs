using PentaGOL.Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PentaGOL.Domain.Entities;
public class News : Auditable
{
    public string Title { get; set; }
    public string ImagePath { get; set; } = "https://media.istockphoto.com/id/938753602/vector/vector-news-icon-newspaper-news.jpg?s=612x612&w=0&k=20&c=WKbMQma_pZ9NbSZKLSZMVI02IesFz9UkMl6qBaHMTj4=";
    public string Description { get; set; }
}

