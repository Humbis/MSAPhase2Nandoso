using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NandosoAppV2.Models
{
    public class Feedback
    {
        public int ID { get; set; }
        public string customerName { get; set; }
        public string comment { get; set; }
    }
}