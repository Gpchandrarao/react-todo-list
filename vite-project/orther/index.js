// async function foo() {
//   return "Hello world";
// }

// const result = foo();
// console.log(result);

// console.log([1, 2] == [1, 2]);
// console.log({} == {});

// const user1 = {
//   name: "John",
//   age: 25,
//   address: {
//     city: "Mumbai",
//     state: "Maharashtra",
//   },
// };

// const user2 = user1;

// user2.name = "Ramesh";
// user2.address.city = "Pune";

// console.log(user1);
// console.log(user2);

// const number = [0, 1, 2, 3, 4, 5];

// const newArry = number.filter((i) => i < 3).map((val) => val + 5);

// console.log(newArry);

const str = "hi i am chandu";
const newStrArry = str.split(" ");

const newarry = newStrArry.map((i) => {
  return i[0].toUpperCase() + i.slice(1);
});
// newStrArry[0]

console.log(newarry);
