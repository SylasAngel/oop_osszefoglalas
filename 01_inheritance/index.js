class parentViewElementClass{
    /**
     * @type {string}
     */
    #id
    /**
     * @type {HTMLDivElement}
     */
    #div

    /**
     * @param {string} id 
     */
    constructor(id){
        this.#id = id

        this.#div = document.createElement('div')
        this.#div.id = this.#id
        this.#div.classList.add('card')
    }
    get div(){
        return this.#div

    }
    /**
     * @param {HTMLElement} parent 
     */
    appendTo(parent){
        parent.appendChild(this.#div)

    }
}

class A extends parentViewElementClass{
    constructor(child){
        super(child)


        const head = document.createElement('div')
        head.classList.add('head')
        head.innerText = `id: ${child}`

        const body = document.createElement('div')
        body.innerText = 'ChildA'

        this.div.appendChild(head)
        this.div.appendChild(body)
    }
        

}

class B extends parentViewElementClass{
    constructor(childB){
        super(childB)


         const head = document.createElement('div')
        head.classList.add('head')
        head.innerText = `id: ${childB}`

        const body = document.createElement('div')
        body.innerText = 'ChildB'

        this.div.appendChild(head)
        this.div.appendChild(body)
    }
}

const parent = document.body

const a = new A("child")
const b = new B("childB")

a.appendTo(parent)
b.appendTo(parent)

console.log('Asdasdasd')