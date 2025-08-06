// Karin.js - Script untuk interaksi halaman Picky No More

document.addEventListener("DOMContentLoaded", () => {
  // Navigasi section
  const sections = document.querySelectorAll("section");
  const menuLinks = document.querySelectorAll(".menu-horizontal a");
  const welcome = document.getElementById("awal");
  const toggleBtn = document.getElementById("toggle-menu");
  const menuContainer = document.getElementById("menu-links");
  const toTopBtn = document.getElementById("toTopBtn");

  // Hanya tampilkan section awal saat load
  sections.forEach(sec => sec.style.display = "none");
  if (welcome) welcome.style.display = "block";

  // Navigasi klik menu
  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      menuLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      sections.forEach(sec => sec.style.display = "none");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = "block";
        targetSection.scrollIntoView({ behavior: "smooth" });
      }

      // Tutup menu di mobile
      menuContainer.classList.remove("show");
    });
  });

  // Toggle menu pada mobile
  toggleBtn.addEventListener("click", () => {
    menuContainer.classList.toggle("show");
  });

  // Tombol kembali ke atas
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      toTopBtn.style.display = "block";
    } else {
      toTopBtn.style.display = "none";
    }
  };
});

// Lightbox image preview
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;