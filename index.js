import http from "http";
import { readFile } from "fs";

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      readFile("index.html", (err, data) => {
        if (err) throw err;
        res.write(data);
      });
      res.end;
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      readFile("about.html", (err, data) => {
        if (err) throw err;
        res.write(data);
      });
      res.end;
    } else if (req.url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      readFile("contact.html", (err, data) => {
        if (err) throw err;
        res.write(data);
      });
      res.end;
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      readFile("404.html", (err, data) => {
        if (err) throw err;
        res.write(data);
      });
      res.end;
    }
  })
  .listen(8080);
