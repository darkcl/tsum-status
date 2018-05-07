"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
class Application {
    constructor() {
        this.app = express_1.default();
        this.server = http_1.default.createServer(this.app);
    }
    version() {
        return "1.0";
    }
    start() {
        this.app.get("/", function (req, res) {
            res.send("Hello World!");
        });
        this.server.listen(3000);
        return true;
    }
    stop() {
        this.server.close();
        return true;
    }
}
exports.Application = Application;
//# sourceMappingURL=application.js.map