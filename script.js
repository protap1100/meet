function nextPage() {
    window.location.href = "yes.html";
  }

  function moveButton() {
    var containerWidth = window.innerWidth;
    var containerHeight = window.innerHeight;

    // Set the width of the "No" button to 100%

    // Calculate random coordinates within the container
    var x = Math.random() * (containerWidth - document.getElementById("noButton").offsetWidth);
    var y = Math.random() * (containerHeight - document.getElementById("noButton").offsetHeight);

    // Set the position of the "No" button
    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
}

  // script.js

function calculateTime() {
  // Get user input for the future date and time
  const dateInput = document.getElementById("dateInput");
  const timeInput = document.getElementById("timeInput");

  const userInput = `${dateInput.value} ${timeInput.value}`;

  // Convert user input to a Date object
  const futureDate = new Date(userInput);
  const currentDate = new Date();

  // Check if the user input is ahead of the current date
  if (futureDate <= currentDate) {
      alert("Please choose a date and time ahead of the current date and time.");
  } else {
      // Calculate the time difference
      const timeDifference = futureDate - currentDate;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Store calculated values in localStorage
      localStorage.setItem('remainingDays', days);
      localStorage.setItem('remainingHours', hours);
      localStorage.setItem('remainingMinutes', minutes);
      localStorage.setItem('remainingSeconds', seconds);

      // Redirect to the result page
      window.location.href = 'result.html';
  }
}


function calculateTime() {
  // Get user input for the future date, time, and meeting place
  const dateInput = document.getElementById("dateInput").value;
  const timeInput = document.getElementById("timeInput").value;
  const placeInput = document.getElementById("place").value;
  
  // Combine date and time into a single string
  const userInput = `${dateInput} ${timeInput}`;

  // Store user input and calculated values in localStorage
  localStorage.setItem('userDateTimeString', userInput);
  localStorage.setItem('meetingPlace', placeInput);

  // ... (rest of the code to calculate days, hours, minutes, and seconds)

  // Redirect to the result page
  window.location.href = 'result.html';
}







