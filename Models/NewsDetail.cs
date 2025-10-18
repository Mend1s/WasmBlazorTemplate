namespace WasmBlazorTemplate.Models;

public class NewsDetail
{
    public int Id { get; set; }
    public string Titulo { get; set; }
    public string Data { get; set; }
    public List<NewsBlock> Blocos { get; set; } = new();
}
