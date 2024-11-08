document.addEventListener('DOMContentLoaded', function () {
  // Get the toggle button and body elements
  const themeToggle = document.getElementById('theme-toggle'); // Assuming the button has the ID 'theme-toggle'
  const body = document.body;

  // Add an event listener for dark/light mode toggle
  themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode'); // Toggle the light-mode class on body

      // Update button text based on the mode
      if (body.classList.contains('light-mode')) {
          themeToggle.textContent = 'Switch to Dark Mode';
      } else {
          themeToggle.textContent = 'Switch to Light Mode';
      }
  });
});
