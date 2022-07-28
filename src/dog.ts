interface IDog {
    name: string,
    color: string,
    age: number
}

export class Dog {
    name: string
    color: string
    age: number

    constructor(params: IDog) {
        const { name, color, age } = params
        this.name = name
        this.color = color
        this.age = age
    }

    bark(){
        console.log('bark')
    }
}