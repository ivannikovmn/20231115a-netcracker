// const hello: string = 'Hello world!'

// console.log(hello);


// const myNumber: number = 42
// const myString: string = 'Hello!'
// const myBoolean: boolean = true


// function sum(a: number, b: number): number {
//     return a + b
// }


// const numbers: number[] = [1, 2, 3]
// const strings: string[] = ['a', 'b', 'c']


// let a: any = '1'

// a = () => 1


// function addOne(num: number | string): number {
//     return 1 + Number(num)
// }


// type NumberOrString = number | string

// function addOne(num: NumberOrString): number {
//     return 1 + Number(num)
// }


// const person: {
//     name: string
//     age: number
//     hobbies: string[]
// } = {
//     name: 'Vladilen',
//     age: 29,
//     hobbies: ['youtube', 'sports']
// }

// interface User {
//         name: string
//         age: number
//         hobbies: string[]
// }

// const User: {
//     name: string
//     age: number
//     hobbies: string[]
// } 


// let a: unknown = 42

// let b = a = 42 ? 'hello' : 'world'


// function infinite(): never {
//     while (true) {
//         console.log(1 + 1);        
//     }
// }


// class User {
//     public name: string
//     protected weight: number
//     private age: number

//     // constructor(name:string) {
//     //     this.name = name
//     // }
//     constructor(public name) {
//         this.name = name
//     }
// }


// function half(<T extends number | string> array: any[]) {
//     return array.slice(0, array.length / 2)
// }