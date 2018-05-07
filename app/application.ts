import express from "express";
import http from "http";

export class Application {
  private app = express();
  private server = http.createServer(this.app);

  version(): string {
    return "1.0";
  }

  start(): boolean {
    this.app.get("/", function(req, res) {
      res.send("Hello World!");
    });

    this.server.listen(3000);

    return true;
  }

  stop(): boolean {
    this.server.close();
    return true;
  }
}
