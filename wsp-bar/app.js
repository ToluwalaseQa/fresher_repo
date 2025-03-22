const fullscreenBtn = document.querySelector('.fullscreen-btn');
const subContent = document.querySelector('.sub-content');
const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');

fullscreenBtn.addEventListener('click', function () {
  if (!document.fullscreenElement) {
    // Enter fullscreen page
    document.documentElement.requestFullscreen();

    // Hide header and sidebar
    header.style.display = 'none';
    sidebar.style.display = 'none';
    subContent.style.width = '100%'; 
    subContent.style.height = '100vh'; 
    subContent.style.marginLeft = '0'; 
    subContent.style.padding = '16px'; 
    mainContent.style.marginLeft = '0'; 
    // Exit fullscreen mode
    document.exitFullscreen();

    // Show header and sidebar
    header.style.display = 'flex';
    sidebar.style.display = 'flex';

    // Reset sub-content styles
    subContent.style.width = '';
    subContent.style.height = '';
    subContent.style.marginLeft = '';
    subContent.style.padding = '';
    mainContent.style.marginLeft = '96px'; 
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
