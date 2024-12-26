// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');

// Check for saved user preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

// Toggle theme on button click
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});