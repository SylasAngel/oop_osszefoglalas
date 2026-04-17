import { ViewElement } from "./ViewElement.js";

class ClassA extends ViewElement {
    constructor(){
        super('classA')
        this.div.textContent = 'ClassADiv'
    }
}

export {ClassA}