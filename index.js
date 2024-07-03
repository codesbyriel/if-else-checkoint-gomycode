function getTicketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else if (age >= 18) {
        return 20;
    } else {
        return "Invalid age";
    }
}

function main() {
    const ageInput = prompt("Please enter your age:");
    const age = parseInt(ageInput, 10);

    if (isNaN(age)) {
        console.log("Invalid input. Please enter a valid age.");
    } else {
        const price = getTicketPrice(age);
        if (price !== "Invalid age") {
            console.log(`The price of the movie ticket is: $${price}`);
        } else {
            console.log(price);
        }
    }
}

main();
