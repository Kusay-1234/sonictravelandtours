document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".numbers h3");
  const animationDuration = 2000;
  const observerOptions = {
    root: null,
    threshold: 0.5, 
  };

  const startCounting = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const section = entry.target;
        const counters = section.querySelectorAll("h3");

        counters.forEach(counter => {
          const target = +counter.getAttribute("data-target"); 
          const updateInterval = 20; 
          const steps = animationDuration / updateInterval;
          const increment = target / steps; 

          let current = 0;
          const updateCount = () => {
            current += increment; 
            if (current < target) {
              counter.innerText = Math.ceil(current); 
              setTimeout(updateCount, updateInterval);
            } else {
              counter.innerText = target + "+";
            }
          };

          updateCount();
        });
        observer.unobserve(section);
      }
    });
  };
  const observer = new IntersectionObserver(startCounting, observerOptions);
  const section = document.querySelector(".numbers");
  observer.observe(section);
});