import {Mammal} from './interface/mammal.interface';
export interface Person extends Mammal {
    firstname: string;
    lastname: string;
}