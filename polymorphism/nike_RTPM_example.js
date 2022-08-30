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
var NikeProducts = /** @class */ (function () {
    function NikeProducts() {
    }
    NikeProducts.prototype.customise = function () {
        console.log("You can Customise All Nike Products Before Purcahsing");
    };
    return NikeProducts;
}());
var Sneakers = /** @class */ (function (_super) {
    __extends(Sneakers, _super);
    function Sneakers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sneakers.prototype.customise = function () {
        console.log("You can Customise Your Nike Sneakers Here");
    };
    return Sneakers;
}(NikeProducts));
var SportBags = /** @class */ (function (_super) {
    __extends(SportBags, _super);
    function SportBags() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SportBags.prototype.customise = function () {
        console.log("You can Customise Your Nike Sneakers Here");
    };
    return SportBags;
}(NikeProducts));
var FootBall_Shorts = /** @class */ (function (_super) {
    __extends(FootBall_Shorts, _super);
    function FootBall_Shorts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FootBall_Shorts.prototype.customise = function () {
        console.log("You can Customise Your SportBags Sneakers Here");
    };
    return FootBall_Shorts;
}(NikeProducts));
var Shoes = /** @class */ (function (_super) {
    __extends(Shoes, _super);
    function Shoes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shoes.prototype.customise = function () {
        console.log("You can Customise Your Nike Shoes Here");
    };
    return Shoes;
}(NikeProducts));
var Shirts = /** @class */ (function (_super) {
    __extends(Shirts, _super);
    function Shirts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shirts.prototype.customise = function () {
        console.log("You can Customise Your Nike Shirts Here");
    };
    return Shirts;
}(NikeProducts));
console.log("");
console.log("");
var shirts = new Shirts();
shirts.customise();
console.log("");
var sport_Bags = new SportBags();
sport_Bags.customise();
console.log("");
console.log("");
