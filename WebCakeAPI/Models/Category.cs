namespace WebCakeAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    //[Table("category")]
    public class Category
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int categoryId { get; set; }


        [StringLength(100)]
        public string categoryName { get; set; }

        //[InverseProperty("categoryId")]
        public ICollection<Product> products { get; set; }
    }
}
