const express =require ('express');
const bodyParser=require('body-parser');
const leaderRouter=express.Router();
leaderRouter.use(bodyParser.json());
leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('content-type','text/html');
    next();
})
.get((req,res,next)=>{
  res.end('we will send all laeders to you');
})
.post((req,res,next)=>{
  res.end('we will add the leader: '+req.body.name+" and the details: "+ req.body.description);
})
.put((req,res,next)=>{
  res.statusCode=403;
  res.end('PUT operation not supported on /leaders');
})
.delete((req,res,next)=>{
  res.end('Deleting all leaders');
});
leaderRouter.route('/:leaderId')
.get((req,res,next)=>{
res.end('Will send the details of the leader: '+ req.params.leaderId +' to you!');
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation not supported on /leaders/'+req.params.leaderId);
})
.put((req,res,next)=>{
    res.write('Updating the leader '+req.params.leaderId+'\n');
    res.end('Will update the leader with name: '+req.body.name+' with details:'+req.body.description);
})
.delete((req,res,next)=>{
res.end('Deleting the dish with leaderId:'+req.params.leaderId);
});

module.exports=leaderRouter;