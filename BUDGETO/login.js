
const loginForm = document.querySelector("#loginPage");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["email"].value;
  const password = loginForm["psswrd"].value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Store email in localStorage
      localStorage.setItem("userEmail", email);
      // Redirect to home.html
      window.location.href = "home.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert('Incorrect Password. Please try again.');
    });
});


