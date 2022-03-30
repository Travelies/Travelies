'use strict'

const showErr = (msg, label) => {
  const errDiv = document.createElement("div");
  errDiv.className = "err-msg";
  errDiv.innerHTML = msg;
  
  const div = document.getElementById(`form-${label}`);
  div.style.borderColor = 'red';
  div.appendChild(errDiv);
};

const removeErr = () => {
  const err = document.getElementsByClassName("err-msg");
  Array.from(err).forEach(
    (item) => item.remove() && item.setAttribute("isvalid", "true")
  );
};

const validateForm = () => {
  const { value: name } = document.getElementById("name");
  const { value: email } = document.getElementById("email");
  const { value: phone } = document.getElementById("phone");
  const { value: service } = document.getElementById("services");
  const { value: message } = document.getElementById("message");

  removeErr();

  if (!name) {
    showErr("Name cannot be empty", "name");
  } else if (name.length < 4) {
    showErr("Name must be at least four characters", "name");
  } else if (!email) {
    showErr("Email cannot be empty", "email");
  } else if (!phone) {
    showErr("Phone cannot be empty", "phone");
  } else if (!+phone) {
    showErr("Phone must be numerical format", "phone");
  } else if (!phone.startsWith("08")) {
    showErr("Phone must starts with 08", "phone");
  } else if (phone.length < 10 || phone.length > 14) {
    showErr(
      "Phone must be at least 10 numbers and maximum 14 characters",
      "phone"
    );
  } else if (!service) {
    showErr("Service must be filled", "service");
  } else if (!message) {
    showErr("message must be filled", "message");
  } else {
    alert("Suggestion has been accepted");
    location.href = "index.html";
  }
};
