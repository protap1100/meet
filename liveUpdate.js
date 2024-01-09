document.addEventListener('DOMContentLoaded', function () {
    const updatedDays = localStorage.getItem('remainingDays');
    const updatedHours = localStorage.getItem('remainingHours');
    const updatedMinutes = localStorage.getItem('remainingMinutes');
    const updatedSeconds = localStorage.getItem('remainingSeconds');

    const timeRemaining = document.getElementById("timeRemaining");
    timeRemaining.innerHTML = `Remaining Time: ${updatedDays} days, ${updatedHours} hours, ${updatedMinutes} minutes, and ${updatedSeconds} seconds `;

    displayUserInputInfo();

    function displayUserInputInfo() {
        const userDateTimeString = localStorage.getItem('userDateTimeString');
        const meetingPlace = localStorage.getItem('meetingPlace');

        const userDateTime = new Date(userDateTimeString);

        const userInputInfoDiv = document.getElementById("userInputInfo");

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

        const formattedUserInput = userDateTime.toLocaleDateString('en-US', options);

        userInputInfoDiv.innerHTML = `Time and Date: ${formattedUserInput}, <br> Meeting Place: ${meetingPlace}`;
    }
});

