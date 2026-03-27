import { ViewElement } from "index.js";

class NavigationBar{
    /**
     * @type {ViewElement []}
     */
    #viewElementList

    /**
     * 
     * @param {string} label 
     * @param {ViewElement} ViewElement 
     * @returns {void}
     */
    addViewElement(label,ViewElement)
    {
        this.#viewElementList.push(ViewElement)
    }
    /**
     * 
     * @param {string} id 
     */
    activate(id){

    }
}