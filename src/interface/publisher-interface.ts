import { ObserverInterface } from "./observer-interface";

export interface PublisherInterface {
    //Subject
    attach(observer:ObserverInterface):void;
    detach(observer:ObserverInterface):void;
    notify(observer:ObserverInterface):void;
} 