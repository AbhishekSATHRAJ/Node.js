var http = require("http");
var url = require("url");
var fs = require("fs");
var port = 3300;
var server = http.createServer((req, res) => {
  var parsedUrl = url.parse(req.url, true);
  var path = parsedUrl.query;
  fs.readFile("./js.js", "Utf-8", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      let a = JSON.parse(data);
      a.push(path);
      fs.writeFile("./js.js", JSON.stringify(a), (err) => {
        if (err) {
          console.log(err);
        }
        let b = JSON.stringify(a);
        res.writeHead(200, { "Content-Type": "application/javascript" });
        res.write(b.filter((a) => Object.keys(a).length !== 0));
        res.end();
      });
    }
  });
});
server.listen(port, () => {
  console.log("server is running on port " + port);
});
