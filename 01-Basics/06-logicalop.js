// Logical operators
// && - And operator | both sides are true
// || - Or operator  | one side is true

// Authentication Problem


let isVerfied = true

let islogin = true

let haspayment = false

let isguest = true

if (isVerfied && islogin && !haspayment) {
    console.log("Greeting: Welcome User")
    console.log("You can access all preimum Features")

} else if (isVerfied || isguest) {
    console.log("Greeting: Welcome Guest")
    console.log("You can access few of Features")
} else {
    console.log("Kindly signup to access this")
}
