// Small enhancements
document.getElementById('year').textContent = new Date().getFullYear();

// Personalize (optional): set your name + CV link once, it updates everywhere
const YOUR_NAME = "Your Name";
const CV_LINK = "#"; // e.g., link to a PDF in your repo

document.getElementById('yourName').textContent = YOUR_NAME;
document.getElementById('yourNameFooter').textContent = YOUR_NAME;
const resumeLink = document.getElementById('resumeLink');
if (CV_LINK && CV_LINK !== "#") {
  resumeLink.href = CV_LINK;
} else {
  resumeLink.style.display = "none";
}
