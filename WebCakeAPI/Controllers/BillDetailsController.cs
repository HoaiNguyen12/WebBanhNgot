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
    public class BillDetailsController : ControllerBase
    {
        private readonly WebBanhNgotContext _context;

        public BillDetailsController(WebBanhNgotContext context)
        {
            _context = context;
        }

        // GET: api/BillDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BillDetail>>> GetBill_details()
        {
            return await _context.Bill_details.ToListAsync();
        }

        // GET: api/BillDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BillDetail>> GetBillDetail(int id)
        {
            var billDetail = await _context.Bill_details.FindAsync(id);

            if (billDetail == null)
            {
                return NotFound();
            }

            return billDetail;
        }

        // PUT: api/BillDetails/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBillDetail(int id, BillDetail billDetail)
        {
            if (id != billDetail.billDetailId)
            {
                return BadRequest();
            }

            _context.Entry(billDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BillDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BillDetails
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<BillDetail>> PostBillDetail(BillDetail billDetail)
        {
            _context.Bill_details.Add(billDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBillDetail", new { id = billDetail.billDetailId }, billDetail);
        }

        // DELETE: api/BillDetails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<BillDetail>> DeleteBillDetail(int id)
        {
            var billDetail = await _context.Bill_details.FindAsync(id);
            if (billDetail == null)
            {
                return NotFound();
            }

            _context.Bill_details.Remove(billDetail);
            await _context.SaveChangesAsync();

            return billDetail;
        }

        private bool BillDetailExists(int id)
        {
            return _context.Bill_details.Any(e => e.billDetailId == id);
        }
    }
}
