const form = document.querySelector(".feedback-form");
const emailRef = document.querySelector("[name='email']");
const messageRef = document.querySelector("[name='message']");

form.addEventListener("input", onDataFormInput);

function onDataFormInput() {
    const formData = {
        email: emailRef.value.trim(),
        message: messageRef.value.trim(),
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
};


if (localStorage.getItem("feedback-form-state") !== null) {
    const getParse = JSON.parse(localStorage.getItem("feedback-form-state"))
    emailRef.value = getParse.email
    messageRef.value = getParse.message
};

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    if (emailRef.value.trim() !== "" && messageRef.value.trim() !== "") {
        const userData = {
        email: emailRef.value.trim(),
        message: messageRef.value.trim(),
    }
    localStorage.removeItem("feedback-form-state")
    form.reset()
    console.log(userData);
    } else {
        alert("All fields must be filled in")
    }
};