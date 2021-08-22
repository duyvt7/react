// use to express and call function on object parent
/*
syntax:
super ([arguments]) // call props on parent obj
super.functionOnParentObj([arguments])
*/

class rectangle {
    constructor(height, width){
        this.height=height
        this.width =  width
    }
    calArea(){
        return this.height*this.width
    }
}
class square extends rectangle {
    constructor(dai,rong){
        super(dai,rong)
    }
}
let d= new square(2,3)
console.log(d.calArea())

class hero {
    constructor(name, hp, damage){
        this.name = name
        this.hp = hp
        this.damage = damage
    }
    applyDamage (damage){
        return this.hp -= damage
    }
    attackEnemy(enemy){
        enemy.applyDamage(this.damage)
    }
}
// const A = new hero('A', 100,100)
// const B = new hero ('B', 110, 90)
// A.attackEnemy(B)
// console.log(A)
// console.log(B)
class rangeHero extends hero{
    constructor(range, name, hp , damage){
        super(name, hp, damage)
        this.range = range
    }
    rangeAttack(enemy){
        super.attackEnemy(enemy)
        this.hp += this.range
    }
}
const A = new rangeHero(10, 'A',100, 10)
const B = new hero('B', 110, 30)
A.rangeAttack(B)
B.attackEnemy(A)
console.log(B)
console.log(A)
