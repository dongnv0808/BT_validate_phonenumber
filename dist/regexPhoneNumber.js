"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneNumberRegex = void 0;
class PhoneNumberRegex {
    constructor() {
        this.PHONENUMBERREGEX = /^[0-9]{2}-[0][0-9]{9}$/;
    }
    validate(regex) {
        return this.PHONENUMBERREGEX.test(regex);
    }
}
exports.PhoneNumberRegex = PhoneNumberRegex;
