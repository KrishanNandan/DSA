const http = require('http');
const os = require('os');
const fs = require('fs');
const path = require("path");
const Event = require("events");


/**Examples of events module */
const pizzaEventEmmiter = new Event();
pizzaEventEmmiter.on("order-pizza",(size)=>{
    console.log("Size of Pizza: ",size); //will log "Size of Pizza:  large"
}); //We can have multiple listner to same event 
pizzaEventEmmiter.emit("order-pizza","large");


/**Examples of OS module*/
console.log("User details:", os.userInfo());


/**Examples of path and file module*/
const filePath = path.resolve(__dirname) + "\\data.txt";

fs.writeFileSync(filePath, "Ek Ben Krishan!!!", { encoding: 'utf-8', flag: "a" });
const fileData = fs.readFileSync(filePath, { encoding: 'utf-8' });/**Since encoding given so string else would have returned buffer object containing the raw binary data of the file */
console.log("File contains: ", fileData);

fs.writeFile(filePath, "Hello your last file has been overrriden", { encoding: "utf-8", flag: "a" }, (_err, result) => {
    console.log("Result of write", result);
});
fs.readFile(filePath, { encoding: "utf-8" }, (_err,read) => {
    console.log("Result of read", read);
});


/**Examples of streams(Buffer is smallest unit of stream) */
const readableStream = fs.createReadStream(filePath,{encoding:'utf-8',highWaterMark:2});/**Watermark is size of buffer in byte */
const writeStream = fs.createWriteStream('./stream.txt',{encoding:'utf-8',highWaterMark:2});
readableStream.on('data',(chunks)=>{ /**Since fs module extends event modules and give data event */
    console.log("Reading through stream",chunks);
    writeStream.write(chunks);
});
/**Instead of listening and writing we could have used pipe method as well to connect both of these streams */
 readableStream.pipe(writeStream);


/**Examples of path and http/https module*/
const server = http.createServer((req, res) => {
    if (req.url === "/krishan") {
        res.write("<h1>Opps!!! wrong page</h1>");
        res.end();
    }
});
server.listen(3000);
