// Simple countdown timer (replace with actual countdown logic)
function updateTimer() {
   const timer = document.getElementById('bid-timer');
   let time = timer.innerText.split(':');
   let hours = parseInt(time[0]);
   let minutes = parseInt(time[1]);
   let seconds = parseInt(time[2]);

   seconds--;

   if (seconds < 0) {
      minutes--;
      seconds = 59;
   }
   if (minutes < 0) {
      hours--;
      minutes = 59;
   }
   if (hours < 0) {
      timer.innerText = "Auction ended";
      return;
   }

   timer.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
   setTimeout(updateTimer, 1000);
}

updateTimer();
