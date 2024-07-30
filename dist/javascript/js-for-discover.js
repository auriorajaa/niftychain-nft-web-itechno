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
});