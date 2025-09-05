// Typing effect for tagline
document.addEventListener("DOMContentLoaded", () => {
  const text = "Aspiring Full-Stack Developer | Cloud & AI Enthusiast | B.Tech ECE";
  const out = document.getElementById("typing");
  out.textContent = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      out.textContent += text.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }
  type();

  // Simple reveal on scroll
  const sections = document.querySelectorAll(".section, header, footer");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.style.opacity = 1;
        en.target.style.transform = "translateY(0)";
        obs.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach(s => {
    s.style.opacity = 0;
    s.style.transform = "translateY(20px)";
    obs.observe(s);
  });
});
