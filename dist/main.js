"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexPhoneNumber_1 = require("./regexPhoneNumber");
let phoneNumberRegex = new regexPhoneNumber_1.PhoneNumberRegex();
let phoneNumber = ['84-0978489648', 'a8-22222222'];
for (let phone of phoneNumber) {
    let validate = phoneNumberRegex.validate(phone);
    console.log(`Phone Number: ${phone} | ${validate}`);
}
