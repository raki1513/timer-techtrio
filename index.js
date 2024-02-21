const dayFlip = document.getElementById("flip-sheet-day");
const hourFlip = document.getElementById("flip-sheet-hour");
const minFlip = document.getElementById("flip-sheet-min");
const secFlip = document.getElementById("flip-sheet-sec");

var second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

var countDown = new Date('Feb 23, 2024 09:30:00').getTime(),
    x = setInterval(function() {

      var now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);}, second)


// Set an interval to run the timer function every 1000ms (1 second)
const stopTimer = setInterval(timer, 1000);

// Function to toggle the "flip" class for seconds flip animation
const flip_anime_sec = () => {
	secFlip.classList.toggle("flip");
};

// Function to toggle the "flip" class for the provided element
const flip_anime = (obj) => {
	obj.classList.add("flip");

	setTimeout(() => {
		obj.classList.remove("flip");
	}, 1000);
};

// Set an interval to run the flip_anime_sec function every 1000ms for seconds flip animation
const stopAnime = setInterval(flip_anime_sec, 1000);