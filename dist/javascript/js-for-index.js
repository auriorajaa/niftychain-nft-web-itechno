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

   chartData.forEach((chartInfo) => {
      const data = chartInfo.data;
      const color = data[data.length - 1] >= data[0]
         ? 'rgba(168, 230, 207, 0.7)' // Hijau mint pastel dengan opacity
         : 'rgba(255, 165, 171, 0.7)'; // Merah muda lembut dengan opacity
      const options = {
         chart: {
            height: "100%",
            maxWidth: "100%",
            type: "area",
            fontFamily: "Inter, sans-serif",
            dropShadow: {
               enabled: false,
            },
            toolbar: {
               show: false,
            },
         },
         tooltip: {
            enabled: true,
            x: {
               show: false,
            },
         },
         fill: {
            type: "gradient",
            gradient: {
               opacityFrom: 0.55,
               opacityTo: 0,
               shade: "#1C64F2",
               gradientToColors: [color],
            },
         },
         dataLabels: {
            enabled: false,
         },
         stroke: {
            width: 2,
            colors: [color],
         },
         grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
               left: 2,
               right: 2,
               top: 0
            },
         },
         series: [
            {
               name: "Volume",
               data: data,
               color: color,
            },
         ],
         xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            labels: {
               show: false,
            },
            axisBorder: {
               show: false,
            },
            axisTicks: {
               show: false,
            },
         },
         yaxis: {
            show: false,
         },
      };

      if (document.getElementById(chartInfo.id) && typeof ApexCharts !== 'undefined') {
         const chart = new ApexCharts(document.getElementById(chartInfo.id), options);
         chart.render();
      }
   });

   const scrollToTopBtn = document.getElementById("scrollToTopBtn");

   // Tampilkan tombol ketika user scroll ke bawah 100px dari atas
   window.onscroll = function () {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
         scrollToTopBtn.classList.replace('opacity-0', 'opacity-100');
      } else {
         scrollToTopBtn.classList.replace('opacity-100', 'opacity-0');
      }
   };

   // Scroll ke atas ketika tombol diklik
   scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   });

});
