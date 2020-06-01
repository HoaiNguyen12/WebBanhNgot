namespace WebCakeAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    //[Table("billDetail")]
    public class BillDetail
    {
        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int? billId { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int? productId { get; set; }

        public int? quantity { get; set; }

        public decimal? price { get; set; }
        //[ForeignKey("billId")]
        //public virtual Bill bill { get; set; }
        //[ForeignKey("productId")]
        //public virtual Product product { get; set; }

    }
}
