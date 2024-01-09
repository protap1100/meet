function nextPage() {
    window.location.href = "yes.html";
  }

  function moveButton() {
    var containerWidth = window.innerWidth;
    var containerHeight = window.innerHeight;


    var x = Math.random() * (containerWidth - document.getElementById("noButton").offsetWidth);
    var y = Math.random() * (containerHeight - document.getElementById("noButton").offsetHeight);

    document.getElementById("noButton").style.left = `${x}px`;
    document.getElementById("noButton").style.top = `${y}px`;
}


function calculateTime() {
  const dateInput = document.getElementById("dateInput");
  const timeInput = document.getElementById("timeInput");
  const placeInput = document.getElementById("place").value;
  const warrning = document.getElementById("warrning");


  const userInput = `${dateInput.value} ${timeInput.value}`;

  localStorage.setItem('meetingPlace', placeInput);
  localStorage.setItem('userDateTimeString', userInput);


  const futureDate = new Date(userInput);
  const currentDate = new Date();

  if (futureDate <= currentDate) {
      warrning.innerHTML ="Ei Date tw chole geche ahmmm chalaki kore chole jawa date select koren";
  } else {
      const timeDifference = futureDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      localStorage.setItem('remainingDays', days);
      localStorage.setItem('remainingHours', hours);
      localStorage.setItem('remainingMinutes', minutes);
      localStorage.setItem('remainingSeconds', seconds);

      window.location.href = 'result.html';
  }
}









