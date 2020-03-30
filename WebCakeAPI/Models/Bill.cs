
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebCakeAPI.Models
{

    //[Table("bill")]
    public class Bill
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int billId { get; set; }

        public int? customerId { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? billDate { get; set; }


        [StringLength(100)]
        public string billPayment { get; set; }


        [StringLength(255)]
        public string billNote { get; set; }


        [StringLength(100)]
        public string billStatus { get; set; }
        //[ForeignKey("customerId")]
        //public virtual Customer customer { get; set; }
        //[InverseProperty("billId")]
        public ICollection<BillDetail> billDetail { get; set; }


    }
}
