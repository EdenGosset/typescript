"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonHelper = void 0;
const MammalType_1 = require("../enum/MammalType");
class PersonHelper {
    static walk() {
        console.log('I am walking');
    }
    static create(firstname = 'Jane', lastname = 'Doe') {
        return {
            firstname: firstname,
            lastname: lastname,
            type: MammalType_1.MammalType.HUMANOID,
            walk: PersonHelper.walk
        };
    }
}
exports.PersonHelper = PersonHelper;
