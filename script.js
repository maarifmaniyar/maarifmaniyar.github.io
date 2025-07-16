// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load from localStorage if present
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});
