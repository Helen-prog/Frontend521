// let obj = {
//     name: "Гомер",
//     colors: {
//         first: "yellow",
//         second: "green"
//     },
//     color: [
//         "black",
//         "white",
//         "red",
//         "blue"
//     ]
// }

// document.writeln(obj.name + " " + obj.colors.second + " " + obj.color[2]);

// let mas = Object.keys(obj.colors).map(function(elem){
//     return elem + ": " + obj.colors[elem];
// })

// console.log(mas);

// let mas = obj.color.map(elem => elem.toUpperCase());

// console.log(mas);



// let mas = obj.color.map(function(elem, index, all){
//     return index + ") " + elem + ", массив: " + all;
// })

// console.log(mas);


// let fil = obj.color.filter(function(elem){
//     return elem.length < 5;  
// })

// console.log(fil);


let user = {
    login: {
        firstName: "Kate",
        lastName: "Pavlova"
    },
    password: 'qwerty',
    role: 'guest'
}

// let login = user.login
// console.log(login);

let {login: {firstName: f, lastName: l}, ...rest} = user;
document.writeln(f + " " + l + " " + rest.password + " " + rest.role);
