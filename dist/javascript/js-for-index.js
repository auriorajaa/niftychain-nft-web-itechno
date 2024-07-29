document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.letter').forEach((letter, index) => {
      letter.style.setProperty('--i', index);
   });

   var typed = new Typed('#typed-text', {
      strings: ['Unique NFTs ^1000', 'Unusual NFTs ^1000'],
      typeSpeed: 250,
      loop: true,
      showCursor: true,
      backDelay: 100,  // Delay before starting to erase
      startDelay: 100,  // Delay before typing starts
      backSpeed: 100,
      startSpeed: 100
   });

   const slider = document.getElementById('nftSlider');
   const prevBtn = document.getElementById('prevBtn');
   const nextBtn = document.getElementById('nextBtn');
   const slideWidth = 80 * 4 + 16 * 3; // width of one card + margin

   nextBtn.addEventListener('click', () => {
      slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
   });

   prevBtn.addEventListener('click', () => {
      slider.scrollBy({ left: -slideWidth, behavior: 'smooth' });
   });

   function startTimer(duration, display) {
      let timer = duration, hours, minutes, seconds;
      setInterval(function () {
         hours = parseInt(timer / 3600, 10);
         minutes = parseInt((timer % 3600) / 60, 10);
         seconds = parseInt(timer % 60, 10);

         hours = hours < 10 ? "0" + hours : hours;
         minutes = minutes < 10 ? "0" + minutes : minutes;
         seconds = seconds < 10 ? "0" + seconds : seconds;

         display.textContent = hours + ":" + minutes + ":" + seconds;

         if (--timer < 0) {
            timer = duration;
         }
      }, 1000);
   }

   window.onload = function () {
      const timers = document.querySelectorAll('.time');

      timers.forEach(timer => {
         const duration = parseInt(timer.getAttribute('data-duration'), 10);
         startTimer(duration, timer);
      });
   };


   document.body.classList.add('visible');

   // Animasi saat scroll untuk setiap section
   const sections = document.querySelectorAll('.scroll-fade-in');

   const options = {
      threshold: 0.1
   };

   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('visible');
         } else {
            entry.target.classList.remove('visible');
         }
      });
   }, options);

   sections.forEach(section => {
      observer.observe(section);
   });
});
