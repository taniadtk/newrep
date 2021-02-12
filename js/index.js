const message = "Hello JS!";
alert(message);

const userName = prompt("Enter your name");
alert("Hello" + userName);

const userAge = Number(prompt("Enter your age"));
alert("Your age is" + userAge);

const nextAge = userAge + 1;
alert("Next year you will be" + nextAge);

if (userAge >= 18) {
    alert("You are adult");
} else {
    alert("You are under age!");
}