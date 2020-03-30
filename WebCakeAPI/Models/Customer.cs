namespace WebCakeAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    //[Table("customer")]
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int customerId { get; set; }


        [StringLength(100)]
        public string customerName { get; set; }


        [StringLength(100)]
        public string customerEmail { get; set; }


        [StringLength(100)]
        public string customerAddress { get; set; }


        [StringLength(15)]
        public string customerPhone { get; set; }

        //[InverseProperty("CustomerId")]
        public ICollection<Bill> Bills { get; set; }
    }
}
