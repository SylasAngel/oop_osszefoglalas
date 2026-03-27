class ViewElement{
    /**
     * @type {string}
     */
    #id
    /**
     * @type {HTMLDivElement}
     */
    #div
    /**
     * 
     * @param {string} id 
     */
    constructor(id){
        this.#id = id
    }

    /**
     * 
     * @param {HTMLDivElement} parent 
     */
    appendto(parent){
    }

    /**
     * @returns {string}
     */
    get id(){
        return this.#id
    }
    /**
     * @returns {HTMLDivElement}
     */
    get div(){
        return this.#div
    }

    /**
     * @param {string} id
     */
    activate(id){

    }
}
export {ViewElement}