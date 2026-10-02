/* =========================
   SOCIAL LINKS — EDIT HERE
   =========================
   Update these URLs once and they will
   appear across the entire website.
   ========================= */
const SOCIAL_LINKS = {
  facebook:  "https://www.facebook.com/profile.php?id=61571321215933",
  instagram: "https://www.instagram.com/astra_international_education",
  twitter:   "#", /* TODO: Add Twitter / X profile URL */
  tiktok:    "https://www.tiktok.com/@astra_in_education"
};

const header = document.getElementById("header");

if (header) {
  header.innerHTML = `
    <header class="site-header">
      <div class="container nav">
        <a class="brand" href="index.html">
          <img src="assets/images/astra_logo.png" alt="Astra Educational Consultancy Logo">
          <span>ASTRA <em>EDUCATION</em></span>
        </a>
        <button class="menu" id="menu" aria-label="Toggle menu">☰</button>
        <nav class="navlinks" id="navlinks">
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="destinations.html">Destinations</a>
          <a href="contact.html">Contact</a>

          <div class="nav-socials">
            <a href="${SOCIAL_LINKS.facebook}" target="_blank" rel="noopener" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="14" height="14" fill="currentColor"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </a>
            <a href="${SOCIAL_LINKS.instagram}" target="_blank" rel="noopener" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="14" fill="currentColor"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
            </a>
            <a href="${SOCIAL_LINKS.twitter}" target="_blank" rel="noopener" aria-label="Twitter / X">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14" fill="currentColor"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </a>
            <a href="${SOCIAL_LINKS.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="14" height="14" fill="currentColor"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
            </a>
          </div>

          <a class="nav-cta" href="inquiry.html">Free Inquiry</a>
        </nav>
      </div>
    </header>
  `;

  document.getElementById("menu").onclick = () => {
    document.getElementById("navlinks").classList.toggle("open");
  };

  const cur = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navlinks a").forEach(a => {
    if (a.getAttribute("href") === cur) a.classList.add("active");
    a.onclick = () => {
      document.getElementById("navlinks").classList.remove("open");
    };
  });
}

/* =========================
   FOOTER
   ========================= */
const footer = document.getElementById("footer");

if (footer) {
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">

          <div class="footer-brand">
            <a class="brand" href="index.html">
              <img src="assets/images/astra_logo.png" alt="Astra Educational Consultancy Logo">
              <span style="color:#fff">ASTRA <em>EDUCATION</em></span>
            </a>
            <p>Astra International Education Pvt. Ltd. — trusted study abroad consultancy in Nepal, guiding students through career counselling, university selection, applications and visa support.</p>
          </div>

          <div class="footer-col">
            <h4>Explore</h4>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="destinations.html">Destinations</a>
            <a href="inquiry.html">Inquiry</a>
          </div>

          <div class="footer-col">
            <h4>Contact</h4>
            <a href="tel:+9779868731307">+977 9868731307</a>
            <a href="mailto:astraineducation@gmail.com">astraineducation@gmail.com</a>
            <a href="https://wa.me/9779868731307" target="_blank" rel="noopener">WhatsApp Chat ↗</a>
          </div>

          <div class="footer-col">
            <h4>Follow Us</h4>
            <a href="${SOCIAL_LINKS.facebook}" target="_blank" rel="noopener">Facebook ↗</a>
            <a href="${SOCIAL_LINKS.instagram}" target="_blank" rel="noopener">Instagram ↗</a>
            <a href="${SOCIAL_LINKS.twitter}" target="_blank" rel="noopener">Twitter / X ↗</a>
            <a href="${SOCIAL_LINKS.tiktok}" target="_blank" rel="noopener">TikTok ↗</a>
          </div>

        </div>

        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Astra International Education Pvt. Ltd.</span>
          <span>Study Abroad • Nepal</span>
        </div>
      </div>
    </footer>

    <div class="wa-float">
      <span class="wa-label">Chat with us</span>
      <a class="wa" href="https://wa.me/9779868731307?text=Hello%20Astra%20International%20Education%2C%20I%20would%20like%20to%20know%20more%20about%20studying%20abroad." target="_blank" rel="noopener" aria-label="WhatsApp">
        <img src="assets/images/whatsapp.svg" alt="WhatsApp">
      </a>
    </div>
  `;
}

/* =========================
   HERO SLIDER
   ========================= */
const slider = document.getElementById("heroSlider");

if (slider) {
  const slides = [...slider.querySelectorAll(".hero-slide")];
  const dots = [...slider.querySelectorAll(".slider-dot")];
  const country = document.getElementById("heroCountry");
  const names = ["AUSTRALIA", "CANADA", "UNITED KINGDOM", "NEW ZEALAND"];
  let current = 0;
  let timer;

  function showSlide(n) {
    current = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
    if (country) country.textContent = names[current];
  }

  function restart() {
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 5000);
  }

  document.getElementById("nextSlide")?.addEventListener("click", () => {
    showSlide(current + 1);
    restart();
  });

  document.getElementById("prevSlide")?.addEventListener("click", () => {
    showSlide(current - 1);
    restart();
  });

  dots.forEach(d => {
    d.addEventListener("click", () => {
      showSlide(Number(d.dataset.slide));
      restart();
    });
  });

  showSlide(0);
  restart();
}
