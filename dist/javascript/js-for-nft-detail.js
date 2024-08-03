// Penghitung waktu mundur sederhana (ganti dengan logika penghitung waktu sebenarnya)
function updateTimer() {
   // Mendapatkan elemen HTML yang menampilkan timer
   const timer = document.getElementById('bid-timer');

   // Mengambil teks dari elemen timer dan membaginya menjadi jam, menit, dan detik
   let time = timer.innerText.split(':');
   let hours = parseInt(time[0]);   // Mengubah jam dari string ke integer
   let minutes = parseInt(time[1]); // Mengubah menit dari string ke integer
   let seconds = parseInt(time[2]); // Mengubah detik dari string ke integer

   // Mengurangi detik
   seconds--;

   // Jika detik kurang dari 0, kurangi menit dan set detik ke 59
   if (seconds < 0) {
      minutes--;
      seconds = 59;
   }

   // Jika menit kurang dari 0, kurangi jam dan set menit ke 59
   if (minutes < 0) {
      hours--;
      minutes = 59;
   }

   // Jika jam kurang dari 0, tampilkan "Auction ended" dan hentikan fungsi
   if (hours < 0) {
      timer.innerText = "Auction ended";
      return;
   }

   // Menampilkan waktu mundur yang sudah diperbarui pada elemen timer
   timer.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

   // Mengatur fungsi updateTimer untuk dipanggil lagi setelah 1 detik (1000 milidetik)
   setTimeout(updateTimer, 1000);
}

// Memulai penghitung waktu mundur
updateTimer();
