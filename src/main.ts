import {Person} from './model/person';
import {PersonHelper} from './model/helper/person.helper';

const janePeople: Person = PersonHelper.create();
const joePeople: Person = PersonHelper.create('Marc', 'Antoine');

console.log(janePeople.lastname);
console.log(joePeople.firstname);

janePeople.walk();
joePeople.walk();