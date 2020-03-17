
exports.up = function(knex) {
    return knex.schema.table("cars", tbl=>{
       
        tbl
            .string("Transmission_type", 255);

        tbl
            .string("Title_status", 255);      
                    
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")
  
};
