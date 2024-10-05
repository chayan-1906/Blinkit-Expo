"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function equals(string1, string2, caseInSensitive) {
    if (caseInSensitive === void 0) { caseInSensitive = true; }
    if (caseInSensitive)
        return (string1 === null || string1 === void 0 ? void 0 : string1.toString().toLowerCase()) === (string2 === null || string2 === void 0 ? void 0 : string2.toString().toLowerCase());
    return (string1 === null || string1 === void 0 ? void 0 : string1.toString()) === (string2 === null || string2 === void 0 ? void 0 : string2.toString());
}
exports.default = equals;
