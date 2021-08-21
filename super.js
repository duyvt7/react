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