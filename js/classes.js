"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceItem = exports.UniversityLib = void 0;
var UniversityLib = /** @class */ (function () {
    function UniversityLib() {
    }
    UniversityLib.prototype.assistCustomer = function (custName) {
        console.log(this.name + ' Assisting ' + custName);
    };
    return UniversityLib;
}());
exports.UniversityLib = UniversityLib;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem() {
        console.log('Creating Reference Item');
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year + ".");
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPub) {
            this._publisher = newPub;
        },
        enumerable: false,
        configurable: true
    });
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map