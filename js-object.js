//1.

var user = null;
user = {
	name: "John",
	surname: "Mike"
}
user.name = "Peter";
delete user.name;

console.log(user);

//2.
var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};

var sum = fruit.apple+fruit.pear+fruit.peach;
console.log(sum);