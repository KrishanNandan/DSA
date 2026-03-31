const express = require("express");
const app = express();

app.use(express.json()); /**Here express.json is Body parser and use is used because it will match all path*/

app.get("/", (req, res, next) => {  /**Will match path like http://localhost:3000/...*/
    res.send("Hello world!!!");
    next();
});

app.get("/user/:productId", (req, res, next) => { /**Will match path like http://localhost:3000/user/9083232 */
    const {productId} = req.params;
    res.send(`You sent param ${productId}`);
    next();
});

app.get("/data/", (req, res, next) => { /**Will match path like http://localhost:3000/data?limit=9083&need=true*/
    const {limit,need} = req.query;
    res.send(`You sent query param ${limit} and ${need}`);
    next();
});

app.all("/verb", (req, res, next) => {  /**It will get executed for all http verb like get, post put etc. if path like http://localhost:3000/verb/...*/
    res.send("Hello world!!!");
    next();
});

/**Example of router middleware
 * 
 * Router Middleware file
 * const express = require('express');
 * const router = express.Router()
 * router.get('./abc/klm',(req,res,next)=>{});
 * module.exports = router;
 * 
 * 
 * File where it will be used
 * const about = require("./about");
 * app.use("/about",about); will match all path post "/about", here we can't use get since get would expect a callback but here we are passing router
 * 
 */

/**JWT Token generation and validation example*/
const jwt = require('jsonwebtoken');
const content = {id:2030,name:"krishan"};
const newToken = jwt.sign(content,'secret');
const decode = jwt.decode(newToken);/**If want to get values back*/
jwt.verify(newToken,'secret used to create')/**For verification */

/**Example of Rate limiter*/
let numberOfRequestsforUser = {};
setInterval(()=>{
    numberOfRequestsforUser = {};
},1000);
app.use((req,res,next)=>{
    const userId = req.headers['user-id'];
    numberOfRequestsforUser[userId] = (numberOfRequestsforUser[userId]||0) + 1;
    if(numberOfRequestsforUser[userId]>5){
       res.status(404).send("no entry allowed");
    }else{
        next()
    }
})






app.listen(3000, (_err) => {
    console.log("Server Running...");
})