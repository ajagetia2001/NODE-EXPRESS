const express=require('express');
const bodyParser=require('body-parser');
const promotionsRouter=express.Router();
promotionsRouter.use(bodyParser.json());
promotionsRouter.route('/')
.all((req,res,next)=>{
    res.statusCode=200;
    res.writeHead('content-type','text/html');
    next();
})
.get((req,res,next)=>{
    res.end('we will send you all promotions to you!');
})
.post((req,res,next)=>{
    res.end('we will add the name: '+req.body.name+' with details '+req.body.description);
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on /promotions');
})
.delete((req,res,next)=>{
    res.end('Deleting all promotions');
});
promotionsRouter.route('/:promotionId')
.get((req,res,next)=>{
    res.end('will show  you the details of particular '+req.params.promotionId+'  with the name: '+req.body.name+' description '+req.body.description);
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST request not supported on '+req.params.promotionId);
})
.put((req,res,next)=>{
    res.write('Updating promotion with promotionId: '+req.params.promotionId+'\n');
    res.end('Updating promotions with name: '+req.body.name+ ' and decription: '+req.body.description);
})
.delete((req,res,next)=>{
    res.end('Deleting the dish with dishId:'+req.params.promotionId);
});

module.exports= promotionsRouter;