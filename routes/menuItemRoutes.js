const express = require('express');
const router = express.Router();
const MenuItem = require('./../model/MenuItem');

router.post('/', async(req, res) =>{
    try{
         // assuming the request body contains the person data
  
      // create a new person document using the mongoose model
      const newMenu = new MenuItem(req.body);
  
      // save the new person to the database
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
  
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
    }
   
  })

  // get method to get the MenuItems
router.get('/', async (req, res) =>{
  try{
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
  } catch(err){
    console.log(err);
      res.status(500).json({error: 'Internal server error'});
    
  }
})

router.get('/:taste', async(req, res)=>{
  try{
    const taste = req.params.taste;
    if(taste == 'Sweet' || taste == 'Sour' || taste == 'Spice'){
      const response = await MenuItem.find({taste: taste});
      console.log('response fetched');
      res.status(200).json(response);
    } else{
      res.status(404).json({error: 'Internal server error'});
    }
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
    }
  
})

module.exports = router;
