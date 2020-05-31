// let and var (scope)


let iamGlobal = "someValue"

if (true) {
    var iamLocal = "some more Value"
    iamGlobal = " My new Value"
    console.log(iamLocal);
    console.log(iamGlobal);
}

console.log(iamLocal);
console.log(iamGlobal);
