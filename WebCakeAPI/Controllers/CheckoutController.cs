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
        public async Task<ActionResult<Bill>> Checkout(Payment pay)
        {
            Bill bill = new Bill();
            bill.billDate = DateTime.Now;
            bill.billStatus = "Chưa giao hàng";
            bill.billPayment = pay.pay;
            bill.billNote = pay.note;
            Users user = getUserId(pay.fullName, pay.userPhone);
            bill.userId = user.userId;
            _context.Bills.Add(bill);
            await _context.SaveChangesAsync();

            var idBill = bill.billId;
            List<Cart> lst = pay.cart;
            foreach (var item in lst)
            {
                BillDetail billDetail = new BillDetail();
                billDetail.billId = idBill;
                billDetail.productId = item.product.productId;
                billDetail.price = (decimal)item.product.productPrice;
                billDetail.quantity = item.quantity;

                _context.Bill_details.Add(billDetail);
                await _context.SaveChangesAsync();
            }
            return Ok();
        }

        public Users getUserId(string fullName, string userPhone)
        {
            Users user = _context.Users.Where(x => x.fullName == fullName && x.userPhone == userPhone).FirstOrDefault();
            return user;
        }
    }

}
