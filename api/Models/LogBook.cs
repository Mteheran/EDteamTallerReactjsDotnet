using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class LogBook
    {
        public Guid LogBookId {get;set;}

        public string UserName {get;set;}

        public DateTime LogBookDate {get;set;}
    }
}