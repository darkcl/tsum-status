export class Application {
  version(): string {
    return "1.0";
  }

  start(): boolean {
    console.log("Application Start");
    return true;
  }
}

const app: Application = new Application();

app.start();
