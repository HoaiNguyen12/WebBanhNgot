namespace WebCakeAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    //[Table("product")]
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int productId { get; set; }

        public int? categoryId { get; set; }


        [StringLength(255)]
        public string productName { get; set; }


        [StringLength(20)]
        public string productUnit { get; set; }

        public decimal? productPrice { get; set; }


        [StringLength(255)]
        public string productDescriptions { get; set; }


        [StringLength(255)]
        public string productImage { get; set; }


        [StringLength(10)]
        public string productSize { get; set; }
        public ICollection<Photo> photo { get; set; }
    }
}
