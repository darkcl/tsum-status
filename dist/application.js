"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Application {
    constructor() {
        this.app = express_1.default();
    }
    version() {
        return "1.0";
    }
    start() {
        this.app.get("/", function (req, res) {
            res.send("Hello World!");
        });
        this.app.get("/ping", function (req, res) {
            res.json({ message: "OK" });
        });
        this.app.listen(3000);
        return true;
    }
    stop() {
        return true;
    }
}
exports.Application = Application;
//# sourceMappingURL=application.js.map