const express = require("express");
 const db = require("../data/connection")

 const router = express.Router();

 //---GET request------

 router.get('/', (req,res)=>{
    db("cars")                 // another way: db.select("*"); .from("cars")
    .then(cars=>{
        res.status(200).json(cars)
    }) 
     .catch(err=>{
         console.log(err)
         res.status(500).json({message:"Sorry! We could not display the list of cars"})
     })
 })

 //-------POST request----------

 router.post('/', (req,res)=>{
     const {VIN, Make, Model} = req.body
    //  const carData = req.body //You donot need to destructure and you can give the whole req.body
    //  like, .insert(carData, "id")

     db("cars")
     .insert({VIN, Make, Model}, "id")
     .then(ids=>{
         db("cars")
         .where({id:ids[0]})
         .then(newEntry=>{
             res.status(201).json(newEntry)
         })
     })
    .catch(err=>{
    res.status(500).json({ message: "Sorry! We are unable to add the car to the database" })
  })
})

//---------DELETE----------

router.delete('/:id', (req, res)=>{
    const {id} = req.params
    db("cars")
    .where({id})
    .del()
    .then(deleted=>{
        res.status(200).json({message:"deleted"})
    })
    .catch(err=>{
        console.log(err)
    })
})

//----------PUT------------
router.put('/:id', (req, res)=>{
    const {id} = req.params
    const changes = req.body
    db("cars")
    .where({id})
    .update(changes,"id")
    .then(updated=>{
        res.status(200).json({message:"listing is updated"})
    })
    .catch(err=>{
        res.status(500).json({message:"Sorry! We can not update the record!"})
    })
})
   
 module.exports = router;
















//---------------DELETE REQUEST WITH IF STATEMENT--------------------
//  router.delete('/:id', (req, res)=>{
//     const {id} = req.params
//     db("cars")
//     .where({id})
//     .del()
//     .then(count=>{
//         if(count>0){
//         res.status(200).json({message:"Your delete request is accepted succesfully"})  
//         }else{
//         res.status(500).json({message:"Sorry! We could not delete the record you requested"}) 
//         }        
//     })
//  })    
    