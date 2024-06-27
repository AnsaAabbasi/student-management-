import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 9);
console.log(randomNumber);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the courses to enrolled",
        choices: ["MS.Office", "HTML", "JavaScript", "Typescript", "Python"]
    }
]);
const tutionfee = {
    "MS.Office": 2000,
    "HTML": 2500,
    "JavaScript": 5000,
    "Typescript": 6000,
    "Python": 10000,
};
console.log(`\nTution Fees: ${tutionfee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment mathod",
        choices: ["Bank Transfer", "Easypaisa", "jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);
const tutionfees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionfees === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\****status****\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Menagement System");
    }
}
else {
    console.log("Invalid amount due to courses\n");
}
