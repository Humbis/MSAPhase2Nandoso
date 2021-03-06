﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Data.Entity.Migrations;

namespace NandosoAppV2.Models
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class NandosoAppV2Context : DbContext
    {
        public class MyConfiguration : DbMigrationsConfiguration<NandosoAppV2Context>
        {
            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
                this.AutomaticMigrationDataLossAllowed = true;
            }
        }
        public NandosoAppV2Context() : base("name=NandosoAppV2Context")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<NandosoAppV2Context, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<NandosoAppV2.Models.Specials> Specials { get; set; }

        public System.Data.Entity.DbSet<NandosoAppV2.Models.Feedback> Feedbacks { get; set; }
    }
}
