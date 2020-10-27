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
    public class RoomController : ControllerBase
    {
        public ChatContext context;

        public RoomController(ChatContext dbcontext)
        {
            context = dbcontext;
            context.Database.EnsureCreated();
        }

        [HttpGet]
        public ActionResult<IEnumerable<Room>> Get()
        {
            return context.Rooms;
        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody] Room value)
        {
            value.RoomId = Guid.NewGuid();
            context.Rooms.Add(value);
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