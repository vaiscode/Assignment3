const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const hospitals =[{Hospital:"ABC", Patients: "10", Location: "CLT"},
{Hospital:"EFG", Patients: "20", Location: "EKM"},
{Hospital:"ABC", Patients: "30", Location: "TVM"}];

router.get('/',(req,res)=>{
        res.send(hospitals);
})


router.post('/add',(req,res)=>{
       console.log(req.body);
       hospitals.push(req.body);
       res.send({hospitals})
})


   router.put('/edit',(req,res)=>{
      console.log(req.body);
      hospitals.splice(0,1,req.body)
      res.send({hospitals});
   })


router.delete('/remove',(req,res)=>{
        console.log(req.body);
        hospitals.pop();
        res.send({hospitals});
     })
module.exports= router;