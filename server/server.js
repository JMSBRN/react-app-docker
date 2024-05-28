import { createServer } from "http";
import { config } from 'dotenv';

config();

const port = process.env.PORT_SERVER;
createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <h1>Home page</h1>
        `);
  } else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <h1>About</h1>
        `);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`
            <h1>Page Not Found</h1>
        `);
  }
}).listen(port, () => {
  console.log(`server running on port ${port}`);
});
