import "mocha";

import { expect } from "chai";

import { Application } from "../app/application";

describe("Application Test", () => {
  let app: Application;

  beforeEach(() => {
    app = new Application();
  });

  afterEach(() => {
    app.stop();
  });

  it("has version", () => {
    expect(app.version()).to.equal("1.0");
  });

  it("should start", () => {
    expect(app.start()).to.be.true;
  });

  it("should stop", () => {
    expect(app.stop()).to.be.true;
  });
});
