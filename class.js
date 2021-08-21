// let rectangle = class {
//     constructor(weight){
//         this.weight = weight
//     }
// }
// console.log(rectangle.name)

// let Rectangle = class rectangle2 {
//     constructor(weight){
//         this.weight = weight
//     }
// }
// // console.log(Rectangle.name)

class rectangle {
    constructor(weight,length){
        this.weight= weight
        this.length = length
    }
    calArea (){
        return this.length*this.weight
    }
}

let square = new rectangle(10,10)
console.log(square.calArea())

//generator

function* makeRangeIterator(start=0, end =100, step=1){
    let iteratorCount=0
    for (let i=1; i<=100; i++){
        iteratorCount++
        yield i
    }
    return iteratorCount
}
console.log(makeRangeIterator())

class polygon {
    constructor(...sides) {
        this.sides = sides;
    }
    *getSides(){
        for (let side of this.sides){
            yield side
        }
    }
}
const pentagon = new polygon(1,2,3,4,5)
console.log([...pentagon.getSides()])


//bind this
class Animal{
    constructor(name){
        this.name = name
    }
    makeNoise(){
        console.log(`this ${this.name} making noise`)
    }
}
class dog extends Animal{
    constructor(name){
        super(name)
    }
    bark(){
        console.log(`this ${this.name} is barking`)
    }
}
let d = new dog('spike')
d.bark()
