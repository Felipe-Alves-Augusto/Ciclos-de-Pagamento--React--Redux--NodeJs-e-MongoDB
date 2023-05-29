const express = require('express');
const router = express.Router();
const billingCycle = require('../api/bilingCycles/bilingCycle');
const mongoose = require('mongoose');

router.get('/billingCycles', (req, res) => {

    let Cycle =  mongoose.model('pagamentos', billingCycle);
    
    Cycle.find().then(results => {

      res.json(results)

    })
    .catch(error => {
        res.json(error);
    })
});

router.post('/billingCycles', (req, res) => {
  let Cycle =  mongoose.model('pagamentos', billingCycle);
  
  const {name, month, year} = req.body;
  const credits = req.body.credits;
  const debts = req.body.debts;
  
  const insertCycle = new Cycle({
    name: name,
    month: month,
    year: year,
    credits: credits,
    debts: debts

  });
  insertCycle.save().then(result => {
    res.status(200);
    res.json({
        message: 'Salvo com sucesso!'
    });

  }).catch(error => {
    res.status(500);
    res.json({message: 'Preencha os campos abaixo'});

    
  })
});

router.put('/billingCycles/:id', (req, res) => {
  let Cycle =  mongoose.model('pagamentos', billingCycle);
  const id = req.params.id;
  const {name, month, year} = req.body;
  const credits = req.body.credits;
  const debts = req.body.debts;

  Cycle.findByIdAndUpdate(id, {
    name: name,
    month: month,
    year: year,
    credits: credits,
    debts: debts

  }).then(result => {
    res.status(200);
    res.json({message: 'Alterado com sucesso'})

  }).catch(error => {
    console.log(error)
    res.status(500);
    res.json({message: 'Não foi possível fazer a alteração'})
  })
})

router.delete('/billingCycles/:id', (req, res) => {
  let Cycle =  mongoose.model('pagamentos', billingCycle);
  const id = req.params.id;
  const {name, month, year} = req.body;

  Cycle.findByIdAndDelete(id, {
      name: name,
      month: month,
      year: year

  }).then(result => {
    res.status(200);
    res.json({message: 'Deletado com sucesso'});

  }).catch(error => {
    res.status(500);
    res.json({message: 'Não foi possível deletar o registro'});
  })


})

router.get('/count', (req, res) => {
  let Cycle =  mongoose.model('pagamentos', billingCycle);

  Cycle.find({}).count().then(results => {
    res.status(200);
    res.json({
      amount: results
    });

    console.log(results);


  })
  .catch(error => {
    if(error){
      res.status(500);
      res.json({
        message: 'Não foi possível pegar a quantidade de registros'
      })
    }
  })

})


router.get('/summary', (req, res) => {
  let Cycle =  mongoose.model('pagamentos', billingCycle);

  Cycle.aggregate([{ 
    $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} 
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        $project: {_id: 0, credit: 1, debt: 1}

    }]).then(result => {
      res.status(200);
      res.json(result);

    }).catch(error => {
      res.status(500);
      res.json(error);
    })
})




module.exports = router;
