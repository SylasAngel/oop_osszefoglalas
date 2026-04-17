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
        this.#div = document.createElement('div')
        this.#div.id = id
    }

    /**
     * 
     * @param {HTMLDivElement} parent 
     */
    appendTo(parent){
        parent.appendChild(this.#div)
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
        this.#div.classList.toggle('hidden', this.#id !== id);
    }
}
export {ViewElement}