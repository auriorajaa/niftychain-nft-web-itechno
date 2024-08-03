// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', (event) => {

   // Mengatur animasi pada kartu saat scroll
   const cards = document.querySelectorAll('.flex-shrink-0'); // Mengambil semua elemen dengan kelas 'flex-shrink-0'
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) { // Jika elemen terlihat di viewport
            entry.target.classList.add('animate__animated', 'animate__fadeInUp'); // Menambahkan kelas animasi
         }
      });
   }, { threshold: 0.1 }); // Threshold 0.1 berarti animasi akan dipicu ketika 10% elemen terlihat

   cards.forEach(card => observer.observe(card)); // Mengamati setiap kartu

   // Inisialisasi tombol scroll ke atas
   const scrollToTopBtn = document.getElementById("scrollToTopBtn"); // Mendapatkan elemen tombol scroll ke atas

   // Menampilkan tombol scroll ke atas ketika halaman digulir lebih dari 100px
   window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         scrollToTopBtn.classList.replace('opacity-0', 'opacity-100'); // Menampilkan tombol
      } else {
         scrollToTopBtn.classList.replace('opacity-100', 'opacity-0'); // Menyembunyikan tombol
      }
   };

   // Menggulung halaman ke atas saat tombol diklik
   scrollToTopBtn.onclick = function () {
      window.scrollTo({
         top: 0,
         behavior: 'smooth' // Pergi ke atas dengan efek halus
      });
   };
});

// Menunggu hingga seluruh konten halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
   // Fungsi untuk menambahkan animasi scroll pada section
   function addScrollAnimation() {
      const sections = document.querySelectorAll('.animate-section'); // Mengambil semua elemen dengan kelas 'animate-section'

      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) { // Jika elemen terlihat di viewport
               entry.target.classList.add('is-visible'); // Menambahkan kelas 'is-visible'
            } else {
               entry.target.classList.remove('is-visible'); // Menghapus kelas 'is-visible' jika elemen tidak terlihat
            }
         });
      });

      sections.forEach(section => {
         observer.observe(section); // Mengamati setiap section
      });
   }

   addScrollAnimation(); // Memanggil fungsi untuk menambahkan animasi scroll
});
