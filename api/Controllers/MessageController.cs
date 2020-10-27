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
    public class MessageController : ControllerBase
    {

        private ChatContext context;

        public MessageController(ChatContext dbcontext)
        {
            context = dbcontext;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Message>> Get()
        {
            return context.Messages;
        }

        [HttpGet]
        [Route("GetMessagesByRoomId/{id}")]
        public ActionResult<IEnumerable<Message>> GetMessagesByRoomId(string id)
        {
            return Ok(context.Messages.Where(p=> p.RoomId == Guid.Parse(id)));
        }

        [HttpGet("{id}")]
        public ActionResult<Message> Get(string id)
        {
            return context.Messages.FirstOrDefault(p=> p.RoomId == Guid.Parse(id));
        }

        [HttpPost]
        public void Post([FromBody] Message value)
        {
            value.MessageId = Guid.NewGuid();
            value.MessageDate = DateTime.Now;
            context.Messages.Add(value);
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