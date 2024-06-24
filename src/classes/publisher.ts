import { ObserverInterface } from '../interface/observer-interface';
import { PublisherInterface } from '../interface/publisher-interface';

export class Publisher implements PublisherInterface{
    //Subject = Publisher
    private observers:ObserverInterface[] = [];

    public attach = (observer:ObserverInterface):void => {
        let exists:boolean = this.observers.includes(observer);
        if(!exists){
            this.observers.push(observer);
            console.log(`Observer ${observer.getId()} foi inscrito.`);
        }
        else{
            console.log("Observer já inscrito");
        }
    }

    public detach = (observer:ObserverInterface):void => {
        let exists:boolean = this.observers.includes(observer);
        if(exists){
            this.observers.filter((obs) => obs === observer);
            console.log(`Observer ${observer.getId()} foi removido.`);
        }
        else{
            console.log(`Observer ${observer.getId()} não inscrito`);
        }
    }


    public notify = ():void => {
        for(const obs of this.observers){
            obs.update(this);
        }
    }


    public businessLogic = ():void => {
        const num:number = Math.floor(Math.random() * (10 + 1));
        console.log("numero:", num);
        this.notify();

    }
}