//static methodName(){..}
//static props [=value]
// class staticExample{
//     static props = 'props value'
//     static staticMethod (){
//         return 'a method example'
//     }
// }
// console.log(staticExample.staticMethod())
// console.log(staticExample.props)

class example2 {
    static aMethod(){
        console.log('s static method')
    }
    anotherMethod(){
        console.log('another Method')
    }
}

example2.aMethod()
let x = new example2 // create a instance
x.anotherMethod()
