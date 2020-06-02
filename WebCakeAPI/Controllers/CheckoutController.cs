using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebCakeAPI.Models;

namespace WebCakeAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckoutController : ControllerBase
    {
        private readonly WebBanhNgotContext _context;

        public CheckoutController(WebBanhNgotContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Checkout(Payment pay)
        {
            Bill bill = new Bill();
            bill.billDate = DateTime.Now;
            bill.billStatus = "Chưa giao hàng";
            bill.billPayment = pay.billPayment;
            bill.billNote = pay.billNote;
            Users user = getUserId(pay.fullName, pay.userPhone);
            bill.userId = user.userId;
            _context.Bills.Add(bill);
            await _context.SaveChangesAsync();

            var idBill = bill.billId;
            List<CartItem> lst = pay.cart;
            foreach (var item in lst)
            {
                BillDetail billDetail = new BillDetail();
                billDetail.billId = idBill;
                billDetail.productId = item.id;
                billDetail.price = (decimal)item.price;
                billDetail.quantity = item.quantity;

                _context.Bill_details.Add(billDetail);
                await _context.SaveChangesAsync();
            }
            return Ok();
        }

        public Users getUserId(string fullname, string userPhone)
        {
            Users user = _context.Users.FirstOrDefault(e => e.fullName == fullname && e.userPhone == userPhone);
            return user;
        }
    }

}
