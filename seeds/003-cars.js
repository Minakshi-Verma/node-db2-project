
exports.seed = async function(knex) {
  
  const carData =[
    {VIN:'4537653752' , Make: 'Toyota', Model: 'Camry', Mileage: '30,000', Transmission_type: 'automatic', Title_status: 'clear'},
    {VIN:'9735352733' , Make: 'Honda', Model: 'Civic', Mileage: '55,000', Transmission_type: 'automatic', Title_status: 'salvage'},
    {VIN:'6601038083' , Make: 'Kia', Model: 'Optima', Mileage: '12,000', Transmission_type: 'manual', Title_status: 'clear'},
    {VIN:'4327639383' , Make: 'Toyota', Model: 'Prius', Mileage: '22,000', Transmission_type: 'automatic', Title_status: 'clear'},
    {VIN:'4099653752' , Make: 'Kia', Model: 'Nitro', Mileage: '10,000', Transmission_type: 'automatic', Title_status: 'clear'},
    {VIN:'1125352733' , Make: 'Honda', Model: 'CR-V', Mileage: '25,000', Transmission_type: 'automatic', Title_status: 'salvage'}
    
    
  ]
  
    // truncate deletes ALL existing entries and reset the id back to 1
    await knex('cars').truncate();
  
    return knex('cars').insert(carData);   
  };