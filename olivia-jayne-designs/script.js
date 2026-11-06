const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".project-card");

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;
    cards.forEach(card => {
      const matches = selected === "All" || card.dataset.category === selected;
      card.classList.toggle("is-hidden", !matches);
    });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
document.getElementById("year").textContent = new Date().getFullYear();
