import { Observer } from "./classes/observer";
import { Publisher } from "./classes/publisher"

const observer_pattern = () => {
    const publisher = new Publisher();

    const observer_01 = new Observer(1);
    publisher.detach(observer_01);

    
    const observer_02 = new Observer(2);

    publisher.attach(observer_01);
    publisher.attach(observer_02);
    publisher.businessLogic();

    publisher.detach(observer_02);

}


observer_pattern();