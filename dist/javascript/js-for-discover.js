document.addEventListener('DOMContentLoaded', (event) => {

   // Animate cards on scroll
   const cards = document.querySelectorAll('.flex-shrink-0');
   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
         }
      });
   }, { threshold: 0.1 });

   cards.forEach(card => observer.observe(card));

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
   function addScrollAnimation() {
      const sections = document.querySelectorAll('.animate-section');

      const observer = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               entry.target.classList.add('is-visible');
            } else {
               entry.target.classList.remove('is-visible');
            }
         });
      });

      sections.forEach(section => {
         observer.observe(section);
      });
   }

   addScrollAnimation();
});

