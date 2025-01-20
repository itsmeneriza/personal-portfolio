// Modal
// Get the modal content
const modalContent = document.querySelector('.modal');
const openModalButton = document.querySelector('.open-modal');
const closeButton = document.querySelector('.close-modal');

// Function to open the modal
openModalButton.addEventListener('click', () => {
    modalContent.style.display = 'block';
});

// Function to close the modal
closeButton.addEventListener('click', () => {
    modalContent.style.display = 'none';
});

// Close the modal outside modal content
window.addEventListener('click', (event) => {
    if (event.target === modalContent) {
        modalContent.style.display = 'none';
    }
});

//Mode
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('trigger-toggle');
    const sections = document.querySelectorAll('.dark-section');

    // Check if dark mode is already enabled from previous sessions
    if (localStorage.getItem('dark-mode') === 'enabled') {
        enableDarkMode();
        toggle.checked = true;
    }

    // Toggle dark mode on checkbox change
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            enableDarkMode();
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            disableDarkMode();
            localStorage.setItem('dark-mode', 'disabled');
        }
    });

    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        sections.forEach(section => section.classList.add('dark-mode'));
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        sections.forEach(section => section.classList.remove('dark-mode'));
    }
});
