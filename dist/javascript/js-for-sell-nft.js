// Inisialisasi AOS (Animate On Scroll) dengan durasi animasi 1200 milidetik
AOS.init({
   duration: 1200, // Durasi animasi dalam milidetik
});

// Membuat instance baru dari Vue
new Vue({
   el: '#app', // Menentukan elemen dengan ID 'app' sebagai root Vue instance
   data: {
      title: '', // Menyimpan judul NFT
      description: '', // Menyimpan deskripsi NFT
      price: '', // Menyimpan harga NFT
      preview: null, // Menyimpan URL dan tipe file untuk pratinjau (null jika tidak ada file)
      creator: '' // Menyimpan nama pembuat NFT
   },
   methods: {
      // Metode untuk menangani perubahan file yang diunggah
      onFileChange(e) {
         const file = e.target.files[0]; // Mengambil file pertama dari input file
         if (file) {
            const fileType = file.type.split('/')[0]; // Menentukan tipe file (misalnya, 'image' atau 'audio')
            this.preview = {
               url: URL.createObjectURL(file), // Membuat URL objek untuk pratinjau file
               type: fileType // Menyimpan tipe file
            };
         } else {
            this.preview = null; // Mengatur pratinjau ke null jika tidak ada file
         }
      },
      // Metode untuk melihat file PDF
      viewPDF(url) {
         window.open(url, '_blank'); // Membuka URL PDF di tab baru
      },
      // Metode untuk memutar audio
      playAudio(url) {
         const audio = new Audio(url); // Membuat objek Audio dengan URL yang diberikan
         audio.play(); // Memulai pemutaran audio
      },
      // Metode untuk mengirimkan formulir
      submitForm() {
         // Logika untuk menangani pengiriman formulir, misalnya, mengunggah data ke server
         alert('NFT Uploaded!'); // Menampilkan pesan alert setelah pengiriman formulir
      }
   }
});
