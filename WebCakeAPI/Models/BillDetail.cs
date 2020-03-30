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
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int billDetailId { get; set; }

        public int? billId { get; set; }

        public int? productId { get; set; }

        public int? quantity { get; set; }

        public decimal? price { get; set; }
        //[ForeignKey("billId")]
        //public virtual Bill bill { get; set; }
        //[ForeignKey("productId")]
        //public virtual Product product { get; set; }

    }
}
