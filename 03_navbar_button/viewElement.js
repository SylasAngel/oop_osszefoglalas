class ViewElement{
    /**
     * @type {string}
     */
    #id

    /**
     * @type {HTMLDivElement}
     */
    #div

    constructor(id){
        this.#id = id
        this.#div = document.createElement('div')
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

    appendTo(parent){
        parent.appendChild(this.#div)
    }
}

export {ViewElement}