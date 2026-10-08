document.addEventListener('DOMContentLoaded', function () {

    const button = document.getElementById('theme-toggle');

    if (!button) {
        console.log('Theme button not found.');
        return;
    }

    const icon = button.querySelector('i');

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    updateIcon();

    // Toggle theme
    button.addEventListener('click', function () {

        const currentTheme =
            document.documentElement.getAttribute('data-theme');

        if (currentTheme === 'dark') {

            document.documentElement.setAttribute(
                'data-theme',
                'light'
            );

            localStorage.setItem('theme', 'light');

        } else {

            document.documentElement.setAttribute(
                'data-theme',
                'dark'
            );

            localStorage.setItem('theme', 'dark');

        }

        updateIcon();
    });


    function updateIcon() {

        const theme =
            document.documentElement.getAttribute('data-theme');

        if (theme === 'dark') {

            icon.className = 'bi bi-sun-fill';

            button.setAttribute(
                'aria-label',
                'Switch to light mode'
            );

            button.setAttribute(
                'title',
                'Switch to light mode'
            );

        } else {

            icon.className = 'bi bi-moon-fill';

            button.setAttribute(
                'aria-label',
                'Switch to dark mode'
            );

            button.setAttribute(
                'title',
                'Switch to dark mode'
            );
        }
    }

});
