// Ambil elemen tombol dan teks
const loveButton = document.querySelector('.love-button');
const greeting = document.querySelector('.greeting');
const photos = document.querySelectorAll('.photo');

// Tambahkan event listener ke tombol
loveButton.addEventListener('click', () => {
    // Sembunyikan tombol
    loveButton.style.display = 'none';

    // Tampilkan teks
    greeting.classList.add('show');

    // Fungsi untuk membuat balon
    function createBalloon() {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`; // Warna acak
        balloon.style.animationDuration = `${Math.random() * 4 + 3}s`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(balloon);

        // Hapus balon setelah animasi selesai
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }

    // Buat balon setiap 500ms
    setInterval(createBalloon, 70);

    // Tampilkan foto dengan animasi
    photos.forEach(photo => {
        photo.style.opacity = 1;
        photo.style.transform = 'translateY(0) rotate(0deg)';
    });

    // Setelah 15 detik, hilangkan foto
    setTimeout(() => {
        photos.forEach(photo => {
            photo.classList.add('fade-out');
        });
    }, 15000);

    // Setelah 17 detik, tampilkan foto kembali
    setTimeout(() => {
        photos.forEach(photo => {
            photo.classList.remove('fade-out');
            photo.style.opacity = 1;
            photo.style.transform = 'translateY(0) rotate(0deg)';
        });
    }, 17000);
});