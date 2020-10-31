using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.SignalR;

namespace api.Hubs
{
    public class ChatHub : Hub
    {
        public Task SendMessage(Message message)
        {
           return Clients.Others.SendAsync("RecievedMessage", message);
        }
        
    }
}