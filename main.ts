import { PhoneNumberRegex } from "./regexPhoneNumber";

let phoneNumberRegex = new PhoneNumberRegex();
let phoneNumber: string[] = ['84-0978489648', 'a8-22222222']
for(let phone of phoneNumber){
    let validate = phoneNumberRegex.validate(phone);
    console.log(`Phone Number: ${phone} | ${validate}`);
}