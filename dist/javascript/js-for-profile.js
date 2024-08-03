// Membuat instance Vue baru
new Vue({
   el: '#app', // Elemen DOM yang menjadi root Vue instance
   data() {
      return {
         // Data pengguna yang ditampilkan di profil
         user: {
            name: 'Mr.0x', // Nama pengguna
            address: '0x1234567890abcdef', // Alamat pengguna (misalnya, alamat dompet kripto)
            bio: 'NFT Collector and Artist', // Biografi pengguna
            profilePicUrl: 'https://fiverrbox.com/wp-content/uploads/2021/12/nft-art.jpg-4-68aedf09.jpg', // URL gambar profil pengguna
            bannerUrl: 'https://via.placeholder.com/1500x400', // URL gambar banner profil pengguna
            socials: [
               { name: 'twitter', url: 'https://twitter.com' }, // Akun Twitter pengguna
               { name: 'instagram', url: 'https://instagram.com' } // Akun Instagram pengguna
            ]
         },
         // Statistik pengguna yang ditampilkan di profil
         userStats: [
            { name: 'NFTs Owned', value: 12 }, // Jumlah NFT yang dimiliki
            { name: 'Collections', value: 3 }, // Jumlah koleksi NFT
            { name: 'Followers', value: 256 }, // Jumlah pengikut
            { name: 'Following', value: 150 } // Jumlah yang diikuti
         ],
         // Daftar NFT yang ditampilkan
         nfts: [
            { id: 1, name: 'v1 PUNK #8421', price: 0.5, imageUrl: 'https://i.seadn.io/s/raw/files/45949d1a4a886613c12a6a77415650ae.png?auto=format&dpr=1&w=384', description: 'V1PUNK. PUNK IS DEAD NFT', traits: [{ name: 'Rarity', value: 'Rare' }] },
            { id: 2, name: 'Lil Pudgy #16852', price: 1.2, imageUrl: 'https://i.seadn.io/s/raw/files/f8daf6b424572e7cf293438ee0cf7d83.png?auto=format&dpr=1&w=384', description: 'Lil pudgys, the penguins', traits: [{ name: 'Rarity', value: 'Epic' }] },
            { id: 3, name: 'Mr. DOB', price: 88.8, imageUrl: 'https://i.seadn.io/s/raw/files/46ba533a35bcfca33388fcfae96e7e2a.jpg?auto=format&dpr=1&w=384', description: 'A set of 40 unique companion pets with special powers', traits: [{ name: 'Rarity', value: 'Super Rare' }] },
            { id: 4, name: 'Kanpai Pandas', price: 0.98775, imageUrl: 'https://i.seadn.io/s/raw/files/7d88ebbfee0a9676d70afa1220f465cd.png?auto=format&dpr=1&w=384', description: 'Recognizable brand and a community of rabid “sophisticated degenerates”', traits: [{ name: 'Rarity', value: 'Epic' }] }
         ],
         // Kriteria penyortiran NFT
         sortBy: 'newest', // Opsi penyortiran default
         searchQuery: '', // Query pencarian untuk filter NFT
         selectedNFT: null, // NFT yang dipilih untuk ditampilkan detailnya
         sellNFT: null, // NFT yang dipilih untuk dijual
         sellPrice: 0, // Harga jual NFT
         sellDuration: 7, // Durasi penjualan NFT (dalam hari)
         hasMoreNFTs: true // Menandakan apakah masih ada NFT yang dapat dimuat
      };
   },
   computed: {
      // Menghitung NFT yang difilter berdasarkan kriteria penyortiran dan pencarian
      filteredNFTs() {
         let sortedNFTs = [...this.nfts]; // Menyalin daftar NFT untuk disorting

         // Menyortir NFT berdasarkan kriteria penyortiran yang dipilih
         if (this.sortBy === 'newest') {
            sortedNFTs.sort((a, b) => b.id - a.id); // Urutkan dari yang terbaru
         } else if (this.sortBy === 'oldest') {
            sortedNFTs.sort((a, b) => a.id - b.id); // Urutkan dari yang terlama
         } else if (this.sortBy === 'highest_price') {
            sortedNFTs.sort((a, b) => b.price - a.price); // Urutkan berdasarkan harga tertinggi
         } else if (this.sortBy === 'lowest_price') {
            sortedNFTs.sort((a, b) => a.price - b.price); // Urutkan berdasarkan harga terendah
         }

         // Memfilter NFT berdasarkan query pencarian
         if (this.searchQuery) {
            return sortedNFTs.filter(nft => nft.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
         }
         return sortedNFTs;
      }
   },
   methods: {
      // Memotong alamat dompet kripto untuk ditampilkan dengan format singkat
      shortenAddress(address) {
         return `${address.slice(0, 6)}...${address.slice(-4)}`;
      },
      // Placeholder untuk eksplorasi NFT
      exploreNFTs() {
      },
      // Placeholder untuk pengeditan profil pengguna
      editProfile() {
      },
      // Menampilkan detail NFT yang dipilih
      showNFTDetails(nft) {
         this.selectedNFT = nft;
      },
      // Menutup tampilan detail NFT
      closeNFTDetails() {
         this.selectedNFT = null;
      },
      // Membuka modal untuk menjual NFT yang dipilih
      openSellModal(nft) {
         this.sellNFT = nft;
      },
      // Menutup modal penjualan
      closeSellModal() {
         this.sellNFT = null;
      },
      // Placeholder untuk mengirim formulir penjualan
      submitSellForm() {
         this.closeSellModal();
      },
      // Placeholder untuk memuat lebih banyak NFT
      loadMoreNFTs() {
      }
   },
   mounted() {
      // Menginisialisasi AOS (Animate On Scroll) library untuk animasi saat scroll
      AOS.init();
   }
});
