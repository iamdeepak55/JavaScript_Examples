// whoIsuser Problem

if (user === "teacher") {
    console.log("Message: Hello " + user);
    console.log("User are authorized to access all books");
} else if (user === "student") {
    console.log("Message: Hello " + user);
    console.log("User are authorized to access all you class books");
} else {
    console.log("Message: Hello Guest " + user);
    console.log("User are not an authorized to access books");
}

//Difference between == and ===

//let user = 10
//let user1 = '10'
//
//if (user === user1) {
//    console.log("hello")
//} else {
//    console.log("bye")
//}
