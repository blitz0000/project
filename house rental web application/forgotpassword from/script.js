const form = document.getElementById("forgot-password-form");
const emailInput = document.getElementById("email");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.textContent = "";

  const email = emailInput.value;

  try {
    // Here you would implement the logic to send a password reset email
    // For example, you could use an API to send the email

    // In this example, we'll just simulate the process
    await new Promise((resolve) => setTimeout(resolve, 1000));

    status.textContent = "A password reset email has been sent to your email address.";
  } catch (error) {
    status.textContent = "An error occurred while sending the password reset email.";
  }
});