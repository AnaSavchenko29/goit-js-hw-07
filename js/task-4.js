const formEl = document.querySelector(".login-form");

const handleFormSubmit = (event) => {
  event.preventDefault();

  const email = formEl.elements.email.value.trim();
  console.log("email:", email);
  const password = formEl.elements.password.value.trim();
  console.log("password:", password);

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);

  formEl.reset();
};

formEl.addEventListener("submit", handleFormSubmit);
