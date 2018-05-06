"use strict";
exports.__esModule = true;
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.version = function () {
        return "1.0";
    };
    Application.prototype.start = function () {
        console.log("Application Start");
        return true;
    };
    return Application;
}());
exports.Application = Application;
var app = new Application();
app.start();
//# sourceMappingURL=index.js.map