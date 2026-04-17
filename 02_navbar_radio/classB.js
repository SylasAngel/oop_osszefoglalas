import { ViewElement } from "./ViewElement.js";

class ClassB extends ViewElement {
    constructor(){
        super('classB')
        this.div.textContent = 'ClassBDiv'
    }
}
export {ClassB}