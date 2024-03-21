import {Person} from "../person";
import {MammalType} from "../enum/MammalType";

export class PersonHelper {
    static walk(){
        console.log('I am walking');
    }

    static create(firstname: string = 'Jane', lastname: string = 'Doe'): Person {
        return {
            firstname: firstname,
            lastname: lastname,
            type: MammalType.HUMANOID,
            walk: PersonHelper.walk
        }
    }
}
