const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
});