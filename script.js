const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginTogglePassword = document.querySelector('.login-toggle');
const registerTogglePassword = document.querySelector('.register-toggle');

function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    const passwordToggle = passwordInput.parentElement.querySelector('.toggle-password');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordToggle.innerHTML = '<ion-icon name="eye-off"></ion-icon>'; 
    } else {
        passwordInput.type = "password";
        passwordToggle.innerHTML = '<ion-icon name="eye"></ion-icon>';
    }
}


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
loginTogglePassword.addEventListener('click', () => {
    togglePasswordVisibility('login-password');
});

registerTogglePassword.addEventListener('click', () => {
    togglePasswordVisibility('register-password');
});



