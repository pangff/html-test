var fs = require('fs');  // file system
var http = require('http');
let indexPaths =["files/index0.html","files/index1.html","files/index2.html"]
let cssPaths =["files/test0.css","files/test1.css","files/test2.css"]
let jsPaths =["files/test0.js","files/test1.js","files/test2.js"]
let resume = false;
var server = http.createServer(function (req, res) {
    // logic here to determine what file, etc
    console.log(req.url.endsWith("index.html"))
    console.log(req.url)
    if(req.url.endsWith("index.html")){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        indexPaths.forEach((item,index)=>{
            setTimeout(()=>{
                let string = fs.readFileSync(item,{encoding:"utf-8"})
                res.write(string);
                if(index==indexPaths.length-1){
                    res.end();
                }
            },1000*index)
        })
    }
    if(req.url.endsWith("test.css")){
        res.writeHead(200, { 'Content-Type': 'text/css' });
        cssPaths.forEach((item,index)=>{
            setTimeout(()=>{
                let string = fs.readFileSync(item,{encoding:"utf-8"})
                res.write(string);
                if(index==cssPaths.length-1){
                    res.end();
                }
            },3000*index)
        })
    }
    if(req.url.endsWith("test.js")){
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        jsPaths.forEach((item,index)=>{
            setTimeout(()=>{
                let string = fs.readFileSync(item,{encoding:"utf-8"})
                res.write(string);
                if(index==jsPaths.length-1){
                    res.end();
                }
            },3000*index)
        })
    }
    if(req.url.endsWith("test.png")){
        res.writeHead(200, { 'Content-Type': 'image/png' });
        setTimeout(()=>{
            let image = fs.readFileSync("files/test.png")
            res.end(image);
        },15000)
    }

    if(req.url.endsWith("test2.png")){
        res.writeHead(200, { 'Content-Type': 'image/png' });
        let image = fs.readFileSync("files/test2.png")
        res.end(image);
    }

    if(req.url.endsWith("video.mp4")){
        res.writeHead(200, { 'Content-Type': 'video/mp4' });
        let video = fs.readFileSync("files/video.mp4")
        res.end(video);

    }

});
server.listen(5003);  // start