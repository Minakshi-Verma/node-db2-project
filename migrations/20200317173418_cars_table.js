
exports.up = function(knex) {
  
    return knex.schema.createTable("cars", tbl=>{
        tbl.increments();
        tbl
            .string("VIN", 20)
            .notNullable()
            .unique()
            .index()
        tbl
            .string("Make", 255)
            .notNullable()
        tbl
            .string("Model", 255)
        tbl
            .integer("Mileage")
                    
      })    
    };
    
    exports.down = function(knex) {
     return knex.schema.dropTableIfExists("cars")
      
    };
    