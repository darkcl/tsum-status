import express from "express";

export class Application {
  private app = express();

  version(): string {
    return "1.0";
  }

  start(): boolean {
    this.app.get("/", function(req, res) {
      res.send("Hello World!");
    });

    this.app.get("/ping", function(req, res) {
      res.json({ message: "OK" });
    });

    this.app.listen(3000);

    return true;
  }

  stop(): boolean {
    return true;
  }
}
