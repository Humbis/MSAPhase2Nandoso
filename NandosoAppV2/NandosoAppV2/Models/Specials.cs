using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NandosoAppV2.Models
{
    public class Specials
    {
        public int ID { get; set; }
        public string name { get; set; }
        public double price { get; set; }
        public string description { get; set; }
        public int specialDate { get; set; }
        public int isPremium { get; set; } //0 for standard, 1 for premium, where it can only be viewed by FB auth
    }
}