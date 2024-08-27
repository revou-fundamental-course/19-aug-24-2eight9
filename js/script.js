// Update time every second
function updateTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const now = new Date();
    currentTimeElement.textContent = now.toString();
}
setInterval(updateTime, 1000);

// Handle form submission
document.getElementById('message-us').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    document.getElementById('outputName').textContent = name || '-';
    document.getElementById('outputDob').textContent = dob || '-';
    document.getElementById('outputGender').textContent = gender;
    document.getElementById('outputMessage').textContent = message || '-';

    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.textContent = name ? `Hi, ${name}! Welcome to Our Website` : 'Welcome to Our Website';
});

// Toggle content visibility
const buttons = document.querySelectorAll('.toggle-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
    });
});
