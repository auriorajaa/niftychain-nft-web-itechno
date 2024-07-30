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

   // Data untuk grafik
   const chartData = [
      {
         id: 'area-chart1',
         data: [12, 19, 3, 5, 2, 3, 7], // Data untuk koleksi 1
      },
      {
         id: 'area-chart2',
         data: [10, 12, 15, 14, 10, 8, 12], // Data untuk koleksi 2
      },
      {
         id: 'area-chart3',
         data: [8, 12, 5, 4, 10, 8, 19], // Data untuk koleksi 3
      },
      {
         id: 'area-chart4',
         data: [28, 12, 5, 34, 47, 22, 259], // Data untuk koleksi 4
      },
      {
         id: 'area-chart5',
         data: [8, 12, 15, 4, 7, 22, 25], // Data untuk koleksi 5
      },
      {
         id: 'area-chart6',
         data: [6, 5, 8, 6, 4, 7, 5], // Data untuk koleksi 6
      },
      {
         id: 'area-chart7',
         data: [8, 10, 9, 12, 11, 13, 10], // Data untuk koleksi 7
      }
   ];

   // Menginisialisasi grafik untuk setiap data grafik
   chartData.forEach((chartInfo) => {
      const data = chartInfo.data;
      const color = data[data.length - 1] >= data[0]
         ? 'rgba(168, 230, 207, 0.7)' // Hijau mint pastel dengan opacity
         : 'rgba(255, 165, 171, 0.7)'; // Merah muda lembut dengan opacity

      // Konfigurasi opsi untuk grafik
      const options = {
         chart: {
            height: "100%", // Tinggi grafik
            maxWidth: "100%", // Lebar maksimum grafik
            type: "area", // Tipe grafik: area
            fontFamily: "Inter, sans-serif", // Font yang digunakan
            dropShadow: {
               enabled: false, // Menonaktifkan efek bayangan
            },
            toolbar: {
               show: false, // Menyembunyikan toolbar grafik
            },
         },
         tooltip: {
            enabled: true, // Mengaktifkan tooltip
            x: {
               show: false, // Menyembunyikan tooltip pada sumbu x
            },
         },
         fill: {
            type: "gradient", // Jenis pengisian: gradien
            gradient: {
               opacityFrom: 0.55, // Opasitas awal gradien
               opacityTo: 0, // Opasitas akhir gradien
               shade: "#1C64F2", // Warna gradien
               gradientToColors: [color], // Warna akhir gradien
            },
         },
         dataLabels: {
            enabled: false, // Menonaktifkan label data
         },
         stroke: {
            width: 2, // Ketebalan garis grafik
            colors: [color], // Warna garis grafik
         },
         grid: {
            show: false, // Menyembunyikan grid
            strokeDashArray: 4, // Garis putus-putus pada grid
            padding: {
               left: 2, // Padding kiri
               right: 2, // Padding kanan
               top: 0 // Padding atas
            },
         },
         series: [
            {
               name: "Volume", // Nama seri data
               data: data, // Data seri
               color: color, // Warna seri
            },
         ],
         xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // Kategori sumbu x
            labels: {
               show: false, // Menyembunyikan label sumbu x
            },
            axisBorder: {
               show: false, // Menyembunyikan batas sumbu x
            },
            axisTicks: {
               show: false, // Menyembunyikan tanda sumbu x
            },
         },
         yaxis: {
            show: false, // Menyembunyikan sumbu y
         },
      };

      // Menggambar grafik jika elemen ID tersedia dan ApexCharts terdefinisi
      if (document.getElementById(chartInfo.id) && typeof ApexCharts !== 'undefined') {
         const chart = new ApexCharts(document.getElementById(chartInfo.id), options);
         chart.render();
      }
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
