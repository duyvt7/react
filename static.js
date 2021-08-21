//static methodName(){..}
//static props [=value]
class staticExample{
    static props = 'props value'
    static staticMethod (){
        return 'a method example'
    }
}
console.log(staticExample.staticMethod())
console.log(staticExample.props)