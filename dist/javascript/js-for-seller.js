new Vue({
   el: '#app', // Elemen dengan ID 'app' akan menjadi elemen root Vue

   data: {
      // Data yang digunakan dalam aplikasi
      bannerUrl: 'https://i.seadn.io/gae/WRcl2YH8E3_7884mcJ0DRN7STGqA8xZQKd-0MFmPftlxUR6i1xB9todMXRW2M6SIpXKAZ842UqKDm1UrkKG8nr7l9NjCkIw-GLQSFQ?auto=format&dpr=1&w=1920', // URL banner
      profilePicUrl: 'https://i.seadn.io/gae/_R4fuC4QGYd14-KwX2bD1wf-AWjDF2VMabfqWFJhIgiN2FnAUpnD5PLdJORrhQ8gly7KcjhQZZpuzYVPF7CDSzsqmDh97z84j2On?auto=format&dpr=1&w=256', // URL gambar profil
      sellerName: 'Beanz Official', // Nama penjual
      sellerDescription: 'Creating unique digital art and NFTs since 2020.', // Deskripsi penjual
      totalItems: 100, // Total item
      totalOwners: 50, // Total pemilik
      floorPrice: 0.5, // Harga dasar
      totalVolume: 100, // Total volume
      sortBy: 'newest', // Kriteria penyortiran (default: terbaru)
      searchQuery: '', // Kuery pencarian
      currentPage: 1, // Halaman saat ini
      itemsPerPage: 4, // Jumlah item per halaman
      selectedNFT: null, // NFT yang dipilih
      nfts: [
         // Daftar NFT
         { id: 1, name: 'Bean #9380', price: 0.5, imageUrl: 'https://i.seadn.io/gcs/files/4826b0813a6735b93482f984d2f47db4.png?auto=format&dpr=1&w=384', description: 'Girlie bean.' },
         { id: 2, name: 'Bean #463', price: 0.9, imageUrl: 'https://i.seadn.io/gcs/files/1b853696c3bd0a14546fdffd2561ad7c.png?auto=format&dpr=1&w=384', description: 'Japanese bean?.' },
         { id: 3, name: 'Bean #2396', price: 2.7, imageUrl: 'https://i.seadn.io/gcs/files/76cca16b2f1529a9fd44c9789f2a5881.png?auto=format&dpr=1&w=384', description: 'Bean with a broom.' },
         { id: 4, name: 'Bean #4427', price: 2.5, imageUrl: 'https://i.seadn.io/gcs/files/9143197516b990e2a4d310e9e0a61785.png?auto=format&dpr=1&w=384', description: 'Varsity samurai bean.' },
         { id: 5, name: 'Bean #9482', price: 0.25, imageUrl: 'https://i.seadn.io/gcs/files/3c6e4f84d733c81a1f3fb1c96f0b1f8b.png?auto=format&dpr=1&w=384', description: 'Electron bean.' },
         { id: 6, name: 'Bean #201', price: 2.2, imageUrl: 'https://i.seadn.io/gcs/files/df976d15e73782181a53f2c53e8b9e8a.png?auto=format&dpr=1&w=384', description: 'Singer from china bean.' },
         { id: 7, name: 'Bean #6905', price: 0.3, imageUrl: 'https://i.seadn.io/gcs/files/12be87a3629330c7a05ae7271bde537b.png?auto=format&dpr=1&w=384', description: 'Lazy bean.' },
         { id: 8, name: 'Bean #39', price: 1.9, imageUrl: 'https://i.seadn.io/gcs/files/659194e9e41cf2aa161fdb2a9378d19a.png?auto=format&dpr=1&w=384', description: 'Japanese gangsta bean.' },
         { id: 9, name: 'Bean #63', price: 0.5, imageUrl: 'https://i.seadn.io/gcs/files/0ae1134e27d113b1c4549bd07461fbd7.png?auto=format&dpr=1&w=384', description: 'Fire up bean.' },
         { id: 10, name: 'Bean #19440', price: 1.5, imageUrl: 'https://i.seadn.io/gcs/files/3378c78827e23089c1e7b2ebbd89548c.png?auto=format&dpr=1&w=1000', description: 'Bean with hoodie.' },
      ]
   },

   computed: {
      // Mengembalikan NFT yang difilter berdasarkan kuery pencarian dan kriteria penyortiran
      filteredNFTs() {
         let filtered = this.nfts;
         if (this.searchQuery) {
            filtered = filtered.filter(nft =>
               nft.name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
         }
         switch (this.sortBy) {
            case 'highest':
               filtered.sort((a, b) => b.price - a.price); // Urutkan dari harga tertinggi ke terendah
               break;
            case 'lowest':
               filtered.sort((a, b) => a.price - b.price); // Urutkan dari harga terendah ke tertinggi
               break;
            default:
               filtered.sort((a, b) => b.id - a.id); // Urutkan berdasarkan ID terbaru
         }
         return filtered;
      },
      // Menghitung jumlah halaman berdasarkan item yang difilter dan jumlah item per halaman
      totalPages() {
         return Math.ceil(this.filteredNFTs.length / this.itemsPerPage);
      },
      // Mengembalikan NFT yang ditampilkan pada halaman saat ini
      paginatedNFTs() {
         const start = (this.currentPage - 1) * this.itemsPerPage;
         const end = start + this.itemsPerPage;
         return this.filteredNFTs.slice(start, end);
      }
   },

   methods: {
      // Menambahkan efek hover pada kartu NFT
      applyHoverEffect(event) {
         const card = event.currentTarget;
         const bounds = card.getBoundingClientRect();
         const mouseX = event.clientX - bounds.left;
         const mouseY = event.clientY - bounds.top;
         const rotateY = ((mouseX / bounds.width) - 0.5) * 10;
         const rotateX = ((mouseY / bounds.height) - 0.5) * -10;
         card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      },
      // Menghapus efek hover pada kartu NFT
      removeHoverEffect(event) {
         const card = event.currentTarget;
         card.style.transform = '';
      },
      // Menampilkan detail NFT yang dipilih
      showDetails(nft) {
         this.selectedNFT = nft;
      },
      // Menangani pembelian NFT
      buyNFT(nft) {
         alert(`You are about to buy ${nft.name} for ${nft.price} ETH`);
         // Implementasikan logika pembelian di sini
      },
      // Navigasi ke halaman sebelumnya
      prevPage() {
         if (this.currentPage > 1) this.currentPage--;
      },
      // Navigasi ke halaman berikutnya
      nextPage() {
         if (this.currentPage < this.totalPages) this.currentPage++;
      }
   },

   mounted() {
      // Inisialisasi animasi AOS (Animate On Scroll)
      AOS.init({
         duration: 1000, // Durasi animasi
         once: true // Hanya jalankan animasi sekali
      });
      // Menambahkan event listener pada kartu NFT untuk efek hover
      const nftCards = document.querySelectorAll('.nft-card');
      nftCards.forEach(card => {
         card.addEventListener('mousemove', this.applyHoverEffect);
         card.addEventListener('mouseleave', this.removeHoverEffect);
      });
   }
});
