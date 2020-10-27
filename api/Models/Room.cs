using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Room
    {
        public Guid RoomId { get;set;}
        public string Name {get;set;}
        public string Description {get;set;}
        public virtual ICollection<Message> Messages {get;set;}
    }
}