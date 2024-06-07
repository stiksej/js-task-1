const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailValue = loginForm.elements.email.value.trim();
    const passwordValue = loginForm.elements.password.value.trim();

    if (emailValue === '' || passwordValue === '') {
        alert('Wszystkie pola powinny zostać wypełnione!');
    } else {
        const formData = {
            email: emailValue,
            password: passwordValue
        };
        console.log(formData);
        loginForm.reset();
    }
});
