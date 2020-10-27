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
        public DbSet<Room> Rooms {get;set;}
        public DbSet<Message> Messages {get;set;}
        public DbSet<LogBook> LogBooks {get;set;}
        public ChatContext(DbContextOptions<ChatContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Room>().HasKey(p=> p.RoomId);
            builder.Entity<Room>().HasMany(p=> p.Messages);
            builder.Entity<Message>().HasKey(p=> p.MessageId);
            builder.Entity<LogBook>().HasKey(p=> p.LogBookId);

            List<Room> rooms = new List<Room>();
            rooms.Add(new Room() { Name = "Deportes", Description = "Sala para hablar de deporte"});
            rooms.Add(new Room() { Name = "Cine", Description = "Sala para hablar de cine"});
            rooms.Add(new Room() { Name = "Ventas", Description = "Sala para vender cosas"});

            builder.Entity<Room>().HasData(rooms);
        }
        
    }
}