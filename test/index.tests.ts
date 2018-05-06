import "mocha";

import { expect } from "chai";

import { Application } from "../app/index";

describe("Application Test", () => {
  it("has version", () => {
    const app: Application = new Application();
    expect(app.version()).to.equal("1.0");
  });
});