var balance = 600;
var checkBalance = false;
var isActive = true;


if (checkBalance === false) {
    console.log("Thank you.Have a nice day!");
} else if (isActive && balance > 0) {
    console.log("Your  balance is $" + balance.toFixed(2) + ".");
} else if (isActive === false) {
    console.log("Your account is no longer active.");
} else if (isActive && balance === 0) {
    console.log("Your account is empty.");
} else if (isActive && balance !== 0) {
    console.log("Your balance is negative. Please contact bank.");
}