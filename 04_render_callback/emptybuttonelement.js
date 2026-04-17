import { Manager } from "./manager.js";
import { ViewElement } from "./ViewElement.js";

class EmptyButtonElement extends ViewElement{

    /**
     * @type {HTMLButtonElement}
     */
    #button

    /**
     * 
     * @param {Manager} manager 
     */
    constructor(manager){
        super(manager)

        this.#button = document.createElement('button')
        this.#button.innerText = 'Üres lista lekérés'

        this.#button.addEventListener('click', () => {
            this.manager.getEmptyList()
        })
        this.div.appendChild(this.#button)
    }

    /**
     * 
     * @param {HTMLElement} parentElement 
     */
    appendTo(parentElement){
        parentElement.appendChild(this.div)
    }
}

export {EmptyButtonElement}