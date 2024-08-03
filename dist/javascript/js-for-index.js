document.addEventListener('DOMContentLoaded', function () {


   // Menambahkan properti CSS custom '--i' pada elemen dengan kelas 'letter'
   document.querySelectorAll('.letter').forEach((letter, index) => {
      letter.style.setProperty('--i', index);
   });

   // Inisialisasi animasi pengetikan menggunakan library Typed.js
   var typed = new Typed('#typed-text', {
      strings: ['Unique NFTs ^1000', 'Unusual NFTs ^1000'], // Teks yang akan ditampilkan
      typeSpeed: 250, // Kecepatan pengetikan dalam milidetik
      loop: true, // Menentukan apakah animasi pengetikan diulang
      showCursor: true, // Menampilkan kursor pengetikan
      backDelay: 100,  // Delay sebelum mulai menghapus teks
      startDelay: 100,  // Delay sebelum mulai mengetik
      backSpeed: 100, // Kecepatan penghapusan teks dalam milidetik
      startSpeed: 100 // Kecepatan awal pengetikan dalam milidetik
   });

   // Inisialisasi slider untuk menampilkan koleksi NFT
   const slider = document.getElementById('nftSlider');
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');
   const slideWidth = 80 * 4 + 16 * 3; // Lebar total satu slide termasuk margin

   // Menggeser slider ke kanan saat tombol 'next' diklik
   nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
   });

   // Menggeser slider ke kiri saat tombol 'prev' diklik
   prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
   });

   // Fungsi untuk memulai timer yang menghitung mundur
   function startTimer(duration, display) {
      let timer = duration, hours, minutes, seconds;
      setInterval(function () {
         hours = parseInt(timer / 3600, 10);
         minutes = parseInt((timer % 3600) / 60, 10);
         seconds = parseInt(timer % 60, 10);

         // Menambahkan angka nol di depan jika kurang dari 10
         hours = hours < 10 ? "0" + hours : hours;
         minutes = minutes < 10 ? "0" + minutes : minutes;
         seconds = seconds < 10 ? "0" + seconds : seconds;

         // Menampilkan waktu dalam format hh:mm:ss
         display.textContent = hours + ":" + minutes + ":" + seconds;

         // Mengulang timer jika sudah selesai
         if (--timer < 0) {
            timer = duration;
         }
      }, 1000);
   }

   // Memulai timer pada elemen dengan kelas 'time' saat halaman dimuat
   window.onload = function () {
      const timers = document.querySelectorAll('.time');

      timers.forEach(timer => {
         const duration = parseInt(timer.getAttribute('data-duration'), 10);
         startTimer(duration, timer);
      });
   };

   // Menambahkan kelas 'visible' pada body untuk animasi
   document.body.classList.add('visible');

   // Menginisialisasi Intersection Observer untuk animasi scroll
   const sections = document.querySelectorAll('.scroll-fade-in');

   const options = {
      threshold: 0.1 // Menentukan batas visibilitas elemen
   };

   // Observer untuk menambahkan atau menghapus kelas 'visible' berdasarkan visibilitas
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('visible');
         } else {
            entry.target.classList.remove('visible');
         }
      });
   }, options);

   // Mengamati setiap elemen dengan kelas 'scroll-fade-in'
   sections.forEach(section => {
      observer.observe(section);
   });

   // Inisialisasi tombol scroll ke atas
   const scrollToTopBtn = document.getElementById("scrollToTopBtn");

   // Menampilkan tombol scroll ke atas ketika halaman digulir lebih dari 100px
   window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         scrollToTopBtn.classList.replace('opacity-0', 'opacity-100');
      } else {
         scrollToTopBtn.classList.replace('opacity-100', 'opacity-0');
      }
   };

   // Menggulung halaman ke atas saat tombol diklik
   scrollToTopBtn.onclick = function () {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };
});

document.addEventListener('DOMContentLoaded', function () {
   function startImageRotation(element) {
      const images = JSON.parse(element.getAttribute('data-images'));
      const interval = parseInt(element.getAttribute('data-interval'), 10);
      let index = 0;

      setInterval(() => {
         index = (index + 1) % images.length;
         element.src = images[index];
      }, interval);
   }

   const nftImages = document.querySelectorAll('img[data-images]');
   nftImages.forEach(img => startImageRotation(img));
});

// Hero Section - Waves effect
VANTA.WAVES({
   el: "#hero-bg",
   mouseControls: true,
   touchControls: true,
   gyroControls: false,
   minHeight: 200.00,
   minWidth: 200.00,
   scale: 1.00,
   scaleMobile: 1.00,
   color: 0xCCCCCC,
   shininess: 30.00,
   waveHeight: 15.00,
   waveSpeed: 0.75,
   zoom: 0.65
});

// Trending Auction Section - Birds effect
VANTA.BIRDS({
   el: "#auction-bg",
   mouseControls: true,
   touchControls: true,
   gyroControls: false,
   minHeight: 200.00,
   minWidth: 200.00,
   scale: 1.00,
   scaleMobile: 1.00,
   backgroundColor: 0xf0f0f0,  // Latar belakang abu-abu sangat terang
   color1: 0xA374D5,  // Warna ungu primer
   color2: 0xFFFBBE,  // Warna light sand
   colorMode: "variance",
   birdSize: 1.20,
   wingSpan: 20.00,
   speedLimit: 3.00,
   separation: 50.00,
   alignment: 20.00,
   cohesion: 20.00,
   quantity: 3.00  // Jumlah burung, sesuaikan sesuai kebutuhan
});

// Trending Collections Section - Clouds effect
VANTA.CLOUDS({
   el: "#collections-bg",
   mouseControls: true,
   touchControls: true,
   gyroControls: false,
   minHeight: 200.00,
   minWidth: 200.00,
   skyColor: 0xA374D5,
   cloudColor: 0xCCAAFF,
   cloudShadowColor: 0x8855CC,
   sunColor: 0xFFFFBB,
   sunGlareColor: 0xFFFFDD,
   sunlightColor: 0xFFFFFF
});