using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api
{
    public class ChatContext : DbContext
    {
        DbSet<Room> Rooms {get;set;}
        DbSet<Message> Messages {get;set;}
        DbSet<LogBook> LogBooks {get;set;}
        public ChatContext(DbContextOptions<DbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Room>().HasKey(p=> p.RoomId);
            builder.Entity<Room>().HasMany(p=> p.Messages);
            builder.Entity<Message>().HasKey(p=> p.MessageId);
            builder.Entity<LogBook>().HasKey(p=> p.LogBookId);
        }
        
    }
}