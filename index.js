let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2,  age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age:29 };
let users = [ john, pete, mary ];

let names = users.map((user) => {return user.name})

console.log( names ); // John, Pete, Mary

//

let usersMapped = users.map((user) => {
    return {fullName: `${user.name} ${user.surname}`, id: user.id}
})

usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith

//
function sortByAge(arr) {
    arr.sort((user1, user2) => {
        return user1.age - user2.age
    })
}
let arr = [john, pete, mary]

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete

//
function getAverageAge(arr) {
    return (arr.reduce((total, user) => {return total + user.age}, 0)) / arr.length
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//
