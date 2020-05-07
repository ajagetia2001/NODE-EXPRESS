const express =require ('express');
const bodyParser=require('body-parser');
const dishRouter=express.Router();
dishRouter.use(bodyParser.json());
dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    next();
})
.get((req,res,next)=>{
  res.end('we will send all dishes to you');
})
.post((req,res,next)=>{
  res.end('we will add the dish: '+req.body.name+" and the details: "+ req.body.description);
})
.put((req,res,next)=>{
  res.statusCode=403;
  res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next)=>{
  res.end('Deleting all dishes');
});

module.exports=dishRouter;