import {MammalType} from '../enum/MammalType'
export interface Mammal{
    readonly type:MammalType;
    walk():void;
}