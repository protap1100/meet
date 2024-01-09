document.addEventListener('DOMContentLoaded', function () {
    // Retrieve calculated values from localStorage
    const updatedDays = localStorage.getItem('remainingDays');
    const updatedHours = localStorage.getItem('remainingHours');
    const updatedMinutes = localStorage.getItem('remainingMinutes');
    const updatedSeconds = localStorage.getItem('remainingSeconds');

    // Display the live remaining time
    const timeRemaining = document.getElementById("timeRemaining");
    timeRemaining.innerHTML = `Remaining Time: ${updatedDays} days, ${updatedHours} hours, ${updatedMinutes} minutes, and ${updatedSeconds} seconds.`;

    // Update and display user's input along with the calculated date and time
    displayUserInputInfo();

    function displayUserInputInfo() {
        // Retrieve the user's input from localStorage
        const userDateTimeString = localStorage.getItem('userDateTimeString');
        const meetingPlace = localStorage.getItem('meetingPlace');

        // Parse the userDateTimeString to a Date object
        const userDateTime = new Date(userDateTimeString);

        // Display the user's input along with the calculated date and time
        const userInputInfoDiv = document.getElementById("userInputInfo");

        // Options for formatting the date and time
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

        // Format the user's input with day name
        const formattedUserInput = userDateTime.toLocaleDateString('en-US', options);

        userInputInfoDiv.innerHTML = `Time and Date: ${formattedUserInput}, <br> Meeting Place: ${meetingPlace}`;
    }
});

