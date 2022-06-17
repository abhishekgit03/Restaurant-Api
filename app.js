const web=require('http'); 
const fs=require("fs");
const data=fs.readFileSync("./menu.json", "utf-8");
//const objdata=JSON.parse(data);
console.log(data);
const server=web.createServer((req,res)=> { 
   if(req.url=="/")
        res.end("Hello from localhost:8000 Home Page");
    else if(req.url=="/api")
    {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(data);
        
    }
    else
    {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("Hello from localhost:8000 404 Page");
    }
});


server.listen(8000,"127.0.0.1", () => {
console.log("Server is listening on port 8000");
});