import { PublisherInterface } from "../interface/publisher-interface";
import { ObserverInterface } from "../interface/observer-interface";
import { Publisher } from './publisher';

export class Observer implements ObserverInterface {

    public constructor(private id:number){
        this.id = id;
    }

    public update = (publisher:PublisherInterface):void => {
        if(publisher instanceof Publisher){
            console.log(`Observer ${this.id} reagiu ao evento`);
        }
    }

    public getId = ():number => {
        return this.id;
    }
}