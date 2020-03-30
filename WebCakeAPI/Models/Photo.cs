namespace WebCakeAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    //[Table("photo")]
    public class Photo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int photoId { get; set; }


        [StringLength(255)]
        public string photoName { get; set; }

        public int? productId { get; set; }

        //[ForeignKey("productId")]
        //public virtual Product product { get; set; }
    }
}
