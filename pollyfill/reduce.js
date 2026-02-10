Array.prototype.reduce = function (callback,initialValue) { 
 let arr = this;
 let result = initialValue;
 arr.forEach((val,i,arr)=>{
   result = callback(result,val,i,arr);
 })
return result;
}