const express=require('express');
const http =require('http');
const app=express();
const bodyParser=require('body-parser');
const morgan=require('morgan');
const hostname='localhost';
const dishRouter  =require('./routes/dishRouter');
const leaderRouter  =require('./routes/leaderRouter');
const port=3000;
const promotionRouter=require('./routes/promotionsRouter');
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
 app.use('/dishes',dishRouter);
 app.use('/dishes/:dishId',dishRouter);
 app.use('/leaders',leaderRouter);
 app.use('/leaders/:leaderId',leaderRouter);
 app.use('/promotions',promotionRouter);
 app.use('/promotions/:promotionId',promotionRouter);
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