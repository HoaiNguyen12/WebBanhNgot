using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebCakeAPI.Models
{
    //[Table("users")]
    public class Users
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Required]
        public int userId { get; set; }
        [StringLength(100)]
        public string userName { get; set; }
        [StringLength(100)]
        public string fullName { get; set; }
        [StringLength(15)]
        public string userPhone { get; set; }
        
        public int isAdmin { get; set; }
        [StringLength(15)]
        public string password { get; set; }
        [StringLength(100)]
        public string address { get; set; }
    }
}
