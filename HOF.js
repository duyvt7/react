// a function that return a function is call a high order function
// first class function 
function SayHello(){
    return function(){
        console.log('Hello world')
    }
}

const sayHello = function(){
    return function(){
        console.log('Hello World!')
    }   
}
const myFunc = sayHello()
myFunc()

function sayHello2(){
    return function(){
        console.log('Hello World!')
    }
}
sayHello2()()