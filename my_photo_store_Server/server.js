
var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    var uri=req.url.slice(1);
    fs.exists(uri,function(exist){
            console.log(uri);
            if(exist){
                fs.readFile(uri,'utf-8',function(err,content){
                    res.write(content);
                    res.end();
                });
            }
            else{
                res.write('404');
                res.end();
            }
        });
}).listen(9876);

console.log('Mini server start at port: 9876');