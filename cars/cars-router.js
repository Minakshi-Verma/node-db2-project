const express = require("express");
 const db = require("../data/connection")

 const router = express.Router();

 //---GET request------

 router.get('/', (req,res)=>{
    db("cars")
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
     const {VIN, Make} = req.body
     db("cars")
     .insert({VIN, Make}, "id")
     .then(ids=>{
         db("cars")
         .where({id:ids[0]})
         .then(newEntry=>{
             res.status(201).json(newEntry)
         })
     })
    .catch(err=>{
    res.status(500).json({ message: "Failed to store data" })
  })
})





 module.exports = router;
    