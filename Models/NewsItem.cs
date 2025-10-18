namespace WasmBlazorTemplate.Models;

public class NewsItem
{
    public int Id { get; set; }
    public string Titulo { get; set; }
    public string Descricao { get; set; }
    public string Data { get; set; }
    public string Capa { get; set; }
    public List<NewsBlock> Blocos { get; set; } = new();
}