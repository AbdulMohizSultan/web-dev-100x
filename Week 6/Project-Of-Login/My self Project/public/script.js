// // Login form
// document.getElementById("loginForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const username = document.getElementById("loginUsername").value;
//   alert(`Welcome back, ${username}! You are logged in.`);
// });

// // Signup form
// document.getElementById("signupForm").addEventListener("submit", function (e) {
//   e.preventDefault();
//   const username = document.getElementById("signupUsername").value;
//   alert(`Thanks for signing up, ${username}! Your account is created.`);
// });

// const loginForm = document.getElementById("loginForm");
// const signupForm = document.getElementById("signupForm");
// const authContainer = document.getElementById("authContainer");
// const logoutSection = document.getElementById("logoutSection");
// const welcomeMessage = document.getElementById("welcomeMessage");
// const logoutBtn = document.getElementById("logoutBtn");

// // Login
// loginForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const username = document.getElementById("loginUsername").value;
//   loginUser(username);
// });

// // Signup
// signupForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const username = document.getElementById("signupUsername").value;
//   loginUser(username);
// });

// // Show logout section and hide forms
// function loginUser(username) {
//   welcomeMessage.textContent = `Welcome, ${username}!`;
//   authContainer.style.display = "none";
//   logoutSection.style.display = "flex";
// }

// // Logout
// logoutBtn.addEventListener("click", function () {
//   authContainer.style.display = "block";
//   logoutSection.style.display = "none";
//   document.getElementById("loginForm").reset();
//   document.getElementById("signupForm").reset();
// });


// const continueBtn = document.getElementById("continueBtn");

// continueBtn.addEventListener("click", function () {
//   window.location.href = "https://www.google.com";
// });


// const form = document.getElementById('signupForm');
// const message = document.getElementById('message');

// form.addEventListener('submit', async function (e) {
//   e.preventDefault();
//   const username = document.getElementById('username').value.trim();

//   try {
//     const res = await fetch('http://localhost:3000/signup', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username })
//     });

//     if (res.status === 409) {
//       message.textContent = '⚠️ User already signed up. Please log in.';
//       message.style.color = 'red';
//     } else if (res.status === 201) {
//       message.textContent = '✅ Signed up successfully! Redirecting...';
//       message.style.color = 'green';
//       setTimeout(() => {
//         window.location.href = 'https://www.google.com';
//       }, 2000);
//     }
//   } catch (err) {
//     message.textContent = 'Something went wrong.';
//     message.style.color = 'red';
//   }
// });
