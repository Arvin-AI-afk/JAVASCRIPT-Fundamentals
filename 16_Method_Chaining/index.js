// Method Chaining = Calling one method after another
//                   in one continous line of code.

let username = window.prompt("Enter your username: ");

// ----- METHOD CHAINING -----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);