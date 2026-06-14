/* ============================================================
   main.js — Halaman CV Ery Sigit Wahyudi
   Deskripsi : File JavaScript utama untuk interaktivitas halaman
   Dibuat    : 2024
   ============================================================ */

/* ===========================
   1. SCROLL TO TOP BUTTON
   ===========================
   Tombol #scrollTopBtn akan muncul (display: block) ketika
   pengguna telah men-scroll halaman lebih dari 300 piksel
   dari atas. Saat diklik, halaman kembali ke posisi paling
   atas dengan animasi smooth scrolling.
*/
window.addEventListener('scroll', function () {
  const btn = document.getElementById('scrollTopBtn');
  if (btn) {
    btn.style.display = window.scrollY > 300 ? 'block' : 'none';
  }
});

/* ===========================
   2. HIGHLIGHT NAVBAR AKTIF
   ===========================
   Setiap kali pengguna men-scroll, fungsi ini memeriksa
   posisi setiap <section> dan <div> bertanda id.
   Nav-link yang href-nya cocok dengan section yang sedang
   terlihat akan mendapatkan class 'active' (ditandai warna emas).
*/
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
  let current = '';

  /* Loop semua section: jika posisi scroll sudah melewati
     batas atas section (dikurangi offset navbar 80px),
     maka section itu dianggap sedang aktif/terlihat. */
  sections.forEach(function (sec) {
    if (window.scrollY >= sec.offsetTop - 80) {
      current = sec.id;
    }
  });

  /* Hapus class 'active' dari semua nav-link,
     lalu tambahkan hanya pada yang sesuai dengan section aktif. */
  navLinks.forEach(function (link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* ===========================
   3. ANIMASI PROGRESS BAR
   ===========================
   Saat halaman selesai dimuat (DOMContentLoaded), semua
   progress bar dikosongkan terlebih dahulu (width: 0%),
   lalu setelah jeda 300ms dianimasikan kembali ke nilai
   aslinya menggunakan CSS transition 'width 1.2s ease'.
   Teknik ini menciptakan efek pengisian yang terlihat dinamis.
*/
document.addEventListener('DOMContentLoaded', function () {
  const bars = document.querySelectorAll('.progress-bar');

  bars.forEach(function (bar) {
    /* Simpan nilai target width dari atribut style inline */
    const target = bar.style.width;

    /* Kosongkan progress bar terlebih dahulu */
    bar.style.width = '0%';

    /* Setelah 300ms, animasikan ke nilai target */
    setTimeout(function () {
      bar.style.transition = 'width 1.2s ease';
      bar.style.width = target;
    }, 300);
  });
});
