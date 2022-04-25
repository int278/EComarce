namespace FinalApi.Models
{
    public class OrderModel
    {
        public int id { get; set; }
        public string? title { get; set; }

        public decimal ? grandtotal { get; set; }
        public int ? quantity { get; set; }
        public string? fullname { get; set; }
        public string? email { get; set; }
        public string? mobile { get; set; }
        public string? address { get; set; }
        public string? city { get; set; }
        public string? state { get; set; }
        public string? zip { get; set; }


    }
}
