
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebCakeAPI.Models
{
    public class Payment
    {
        public int? userId { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime? billDate { get; set; }


        [StringLength(100)]
        public string billPayment { get; set; }


        [StringLength(255)]
        public string billNote { get; set; }


        [StringLength(100)]
        public string billStatus { get; set; }
        [StringLength(100)]
        public string fullName { get; set; }
        [StringLength(15)]
        public string userPhone { get; set; }
        [StringLength(100)]
        public string userAddress { get; set; }

        public List<CartItem> lst { get; set; } 


    }
}
