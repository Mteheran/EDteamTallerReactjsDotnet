using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Message
    {
        public Guid MessageId {get;set;} = Guid.NewGuid();

        public Guid RoomId {get;set;}

        public string Content {get;set;}

        public string UserName {get;set;}
        
        public DateTime MessageDate {get;set;}       

        public virtual Room Room  {get;set;} 
        
    }
}