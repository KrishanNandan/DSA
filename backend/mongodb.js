/**
 * const mongoose = require('mongoose');
 * mongoose.connect(mongourlwithpassword+'/databasename'+'?retry...');
 * 
 *const userSchema = new mongoose.schema({...});
 *const user = mongoose.model('user',userSchema); mongoose will pularize the collection name from user to users
 *C-->user.create({username:req.body.username}), in place of create save, insertOne etc method could have also been used
 *R-->user.find().limit(10), will give first 10 values of collection, user.find({age:{'$gt':30}}), returns all document greater than 30, gt is called query operator, similar to find is findOne etc
 *U-->user.updateOne({id:"19"},{$push:{purchased:courseId}}}), it is following (selector,data to be sent), in place of push, set can also be used
 *D-->user.deleteOne({username:'xyz'}), delete document with this username.
 * 
 * projection operator: if we want to have only certain part of document to be fetched, e.g user.find({},{emails:{$slice:1}}) 
 *                      here slice is projection and telling only to return 1st element of emails array, and this query as whole will return
 *                      1st element of emails array from all the documents of the user collection, user.find({}, { username: 1, _id: 0 }) 
 *                      in the above example it will return all the username in the user collection also it will omit _id since mongo by default sends id.
 * 
 * aggregation operator: Tool used to perform calculation or transformation over whole collection.
 * 
 * Index: user.createIndex({age:1}); will create index based on age field, this is example of single field index
 *         user.createIndex({age:1,gender:1}); compound index first will index based on age and then gender
 * 
 * Middleware/Hooks: they run pre and post of any operation user.pre("save",(next)=>{
 *     if(this.name.length<3) { return next(new Error())};                                       
 *     next(); will run and check name if length is less than 3 
 * }) similarly we have validate method which helps in validating schema and like pre we have post
 * 
 * Transaction,MongoDump(to make backup of db in bson file), mongorestore(to restore db from bson files)
 * 
 */