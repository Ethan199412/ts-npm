interface ICat {
    name: string,
    color: string,
    age: number
}

class Cat {
    name: string
    color: string
    age: number

    constructor(params: ICat) {
        const { name, color, age } = params
        this.name = name
        this.color = color
        this.age = age
    }

    meow(){
        console.log('meow')
    }
}