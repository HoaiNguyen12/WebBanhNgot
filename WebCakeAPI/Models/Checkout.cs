
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebCakeAPI.Models
{

    public class Checkout
    {

        [StringLength(100)]
        public string name { get; set; }

        [StringLength(100)]
        public string email { get; set; }


        [StringLength(100)]
        public string address { get; set; }


        [StringLength(15)]
        public string phone { get; set; }

        [StringLength(100)]
        public string pay { get; set; }


        [StringLength(255)]
        public string note { get; set; }
    }
}
