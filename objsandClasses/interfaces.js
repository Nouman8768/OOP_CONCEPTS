var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var GrandFather = /** @class */ (function () {
    function GrandFather() {
    }
    return GrandFather;
}());
var Father = /** @class */ (function () {
    function Father() {
    }
    return Father;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derived;
}(GrandFather));
var Child = /** @class */ (function () {
    function Child() {
    }
    return Child;
}());
var X = /** @class */ (function () {
    function X() {
    }
    return X;
}());
var y = /** @class */ (function (_super) {
    __extends(y, _super);
    function y() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return y;
}(X));
var z = /** @class */ (function (_super) {
    __extends(z, _super);
    function z() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return z;
}(X));
