const express = require('express');
const router = express.Router();
const Person = require('./../model/Person');

router.post('/', async(req, res) =>{
    try{
      const data =Person(req.body);    // assuming the request body contains the person data
  
      // create a new person document using the mongoose model
      const newPerson = new Person(data);
  
      // save the new person to the database
      const response = await newPerson.save();
      console.log('data saved');
      res.status(200).json(response);
  
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
    }
   
  })

  // get method to get the person
router.get('/', async(req, res) =>{
    try{
      const data = await Person.find();
      console.log('data fetched');
      res.status(200).json(data);
  
    } catch (err){
      console.log(err);
      res.status(500).json({error: 'Internal server error'});
  
    }
  })

 router.get('/:workType', async(req, res)=>{
    try{
      const workType = req.params.workType;
      if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
        const response = await Person.find({work: workType});
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

  router.put('/:id', async(req, res)=>{
    try{
      const id = req.params.id; // extract the id from the url parameter
    const updatedPersonData = req.body;  // updated data for the person

    const response = await Person.findByIdAndUpdate(id, updatedPersonData,{
      new: true,  // return the updated document
      runValidators: true,  // run Mongoose validation
    })

    if(!response){
      res.status(404).json({ error: 'person not found' });
    }

    console.log('data updated');
    res.status(200).json(response);

  } catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});

  }

  })

  router.delete('/:id', async (req, res)=>{
    try{
      const personId = req.params.id;  // extract the person's id from the url parameter

      // assuming you have a person model
      const response = await Person.findByIdRemove(personId);
      if(!response) {
        return res.status(404).json({ error: 'Person not found'});
      }
      console.log('person deleted');
      res.status(200).json({message: 'person deleted Sucessfully'});

} catch(err){
  console.log(err);
  res.status(500).json({error: 'Internal server error'});
}
  })

 module.exports = router;
  