const express=require('express');
const http =require('http');
const app=express();
const bodyParser=require('body-parser');
const morgan=require('morgan');
const hostname='localhost';
const port=3000;
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());


  app.all('/dishes',(req,res,next)=>{
      res.statusCode=200;
      res.setHeader('content-type','text/html');
      next();
  });
  app.get('/dishes',(req,res,next)=>{
    res.end('we will send all dishes to you');
  });
  app.post('/dishes',(req,res,next)=>{
    res.end('we will add the dish: '+req.body.name+" and the details: "+ req.body.description);
  });
  app.put('/dishes',(req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on /dishes');
  });
  app.delete('/dishes',(req,res,next)=>{
    res.end('Deleting all dishes');
  });
  app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
  });
  app.post('/dishes/:dishId',(req,res,next)=>{
    res.statusCode=403;
    res.end('POST request not supperted on /dishes/'+req.params.dishId);
  });
  app.put('/dishes/:dishId',(req,res,post)=>{
    res.write('Updating the dish: '+req.params.dishId+'\n');
    res.end('Will update the dish: '+req.body.name+' with details '+req.body.description);
  });
  app.delete('/dishes/:dishId',(req,res,next)=>{
res.end('Deleting dish: '+req.params.dishId);
  });
  app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
  
  });
const server=http.createServer(app);
server.listen(port,hostname,()=>{
console.log(`server running at http://${hostname}:${port}`);
})