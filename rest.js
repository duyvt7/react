class array {
    static show(a, ...nums){
        console.log(a, ...nums)
    }
}

array.show(1,2,3,4)

let a = [2,3,4]
console.log(1,...a,5)