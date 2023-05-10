// Set the date and time you want to count down to
const countDownDate = new Date("November 20, 2023 12:00:00").getTime();

// Update the countdown every second
const x = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with the corresponding ID
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
