// Ambil elemen-elemen yang diperlukan
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

// Menampilkan atau menyembunyikan menu saat hamburger diklik
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Menutup menu saat klik di luar navbar
document.addEventListener("click", (event) => {
  // Cek apakah klik terjadi di luar navbar dan hamburger
  if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});
