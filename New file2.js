
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed <= speedLimit) {
        console.log("Ok");
        return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    
    if (points >= 12) {
        console.log(`Points: ${points}. License suspended.`);
    } else {
        console.log(`Points: ${points}`);
    }
}


function main() {
    const speed = parseInt(prompt("Enter the speed of the car: "));
    
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Speed must be a positive number.");
    } else {
        calculateDemeritPoints(speed);
    }
}

main();
