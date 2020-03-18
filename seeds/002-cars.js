

exports.seed = async function(knex) {
  
  const carData =[
    {VIN:'4099653752' , Make: 'Kia', Model: 'Nitro', Mileage: '10,000', Transmission_type: 'automatic', Title_status: 'clear'},
    {VIN:'1125352733' , Make: 'Honda', Model: 'CR-V', Mileage: '25,000', Transmission_type: 'automatic', Title_status: 'salvage'},
    
    
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('cars').truncate();
  
    return knex('cars').insert(carData);   
  };
  
