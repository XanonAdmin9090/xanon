// Show login container
function showLogin() {
  const loginContainer = document.getElementById('loginContainer');
  loginContainer.classList.remove('hidden');
}

// Login validation
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const validUsername = "xanon";
  const validPassword = "@Root@Admin@Bash";

  const messageElement = document.getElementById('loginMessage');

  if (username === validUsername && password === validPassword) {
    messageElement.style.color = "green";
    messageElement.textContent = "Login successful! Welcome.";
  } else {
    messageElement.style.color = "red";
    messageElement.textContent = "Invalid credentials. Please try again.";
  }
});
