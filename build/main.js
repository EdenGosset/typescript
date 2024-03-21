"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_helper_1 = require("./model/helper/person.helper");
const janePeople = person_helper_1.PersonHelper.create();
const joePeople = person_helper_1.PersonHelper.create('Marc', 'Antoine');
console.log(janePeople.lastname);
console.log(joePeople.firstname);
janePeople.walk();
joePeople.walk();
