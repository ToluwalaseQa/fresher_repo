const fullscreenBtn = document.querySelector('.fullscreen-btn');
const subContent = document.querySelector('.sub-content');
const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

fullscreenBtn.addEventListener('click', function () {
  if (!document.fullscreenElement) {
    // Enter fullscreen mode
    document.documentElement.requestFullscreen();
  } else {
    // Exit fullscreen mode
    document.exitFullscreen();
  }
});

// Handle fullscreen state changes
document.addEventListener('fullscreenchange', function () {
  if (document.fullscreenElement) {
    // Fullscreen mode is active
    // Styles are handled by CSS, no need for JavaScript style changes
  } else {
    // Exited fullscreen mode
    // Styles are automatically reset by CSS, no need for JavaScript style changes
  }
});

// Update time every second
function updateTime() {
  const timeElement = document.querySelector('.time');
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  timeElement.innerText = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);
updateTime();
