
  const texts = ["FrontEnd Developer", "Web Developer", "Web Designer", "Aspiring Full Stack Developer"];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  (function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typewriter').textContent = letter;
    document.getElementById('typewriter').style.color = "var(--primary)";

    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1000); // Pause before next word
    } else {
      setTimeout(type, 150); // Typing speed
    }
  })();


document.addEventListener("DOMContentLoaded", () => {
    const progress = document.querySelectorAll(".progress");

    progress.forEach((bar, idx) => {
        const target = +bar.getAttribute("data-target"); // +bar = 75(string) = (convert as number)
        const percentLabel = document.querySelectorAll(".percent")[idx];
        let width = 0;

        const interval = setInterval(() => {
            if(width >= target) {
                clearInterval(interval);
            } else {
                width++;
                bar.style.width = width + "%";
                percentLabel.innerText = width + "%";
            }
        }, 20);
    });
});

// loading bar
document.addEventListener("DOMContentLoaded", () => {
    const numbers = document.querySelectorAll(".number");
    const circles = document.querySelectorAll(".progress-circle");

    numbers.forEach((bar, idx) => {
        const target = +bar.getAttribute("data-target");
        let current = 0;

        const updateProgress = setInterval(() => {
            if (current >= target) {
                clearInterval(updateProgress);
            } else {
                current++;
                bar.innerText = current + "%";
                const offset = 283 - (283 * current) / 100;
                circles[idx].style.strokeDashoffset = offset;
            }
        }, 20); // slow animation
    });
});
