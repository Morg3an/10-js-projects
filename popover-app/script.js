const popoverBtn = document.getElementById('popover-btn');
const popoverContent = document.getElementById('popover-content');
const closeBtn = document.getElementById('close-btn');

popoverBtn.addEventListener('click', () => {
    popoverContent.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    popoverContent.style.display = 'none';
});