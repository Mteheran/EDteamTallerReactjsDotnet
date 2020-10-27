using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogBookController : ControllerBase
    {        
        private ChatContext context;

        public LogBookController(ChatContext dbcontext)
        {
            context = dbcontext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<LogBook>> Get()
        {
            return context.LogBooks;
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public async Task Post([FromBody] LogBook value)
        {
            value.LogBookId = Guid.NewGuid();
            value.LogBookDate = DateTime.Now;
            context.LogBooks.Add(value);
            await context.SaveChangesAsync();
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}