// toggle.js

document.addEventListener('DOMContentLoaded', function () {
    // Check if the toggle state is saved in localStorage
    const isLightMode = localStorage.getItem('lightMode') === 'true';
    const body = document.body;
    const moon = document.querySelector('.moon');
    const tdnn = document.querySelector('.tdnn');

    // Set initial toggle state based on localStorage
    if (isLightMode) {
        body.classList.add('light');
        moon.classList.add('sun');
        tdnn.classList.add('day');
    }

    // Toggle light mode on click and save state in localStorage
    document.querySelector('.tdnn').addEventListener('click', function () {
        body.classList.toggle('light');
        moon.classList.toggle('sun');
        tdnn.classList.toggle('day');

        // Save toggle state in localStorage
        localStorage.setItem('lightMode', body.classList.contains('light'));
    });
});
