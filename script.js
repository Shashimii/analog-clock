// Select the Hands
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

// Function to make it Move
function updateClock() {
    const now = new Date(); // Initialize Date Instance
    const seconds = now.getSeconds(); // Seconds
    const minutes = now.getMinutes(); // Minutes
    const hours = now.getHours(); // Hours

    // Convert it to Degrees
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    // Apply the Degrees to Hands
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// Call the function every 1 second
setInterval(updateClock, 1000);
// Initial Call
updateClock(); 
