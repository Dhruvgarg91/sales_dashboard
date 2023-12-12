document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container'),
        pwShowHide = document.querySelectorAll('.showHidePw'),
        pwFields = document.querySelectorAll('.password'),
        loginForm = document.querySelector('.form.login form'),
        signupForm = document.querySelector('.form.signup form'),
        signupLink = document.querySelector('.signup-link'),
        loginLink = document.querySelector('.login-link');

    // Function to toggle password visibility
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener('click', () => {
            pwFields.forEach(pwField => {
                pwField.type = pwField.type === 'password' ? 'text' : 'password';
                pwShowHide.forEach(icon => {
                    icon.classList.toggle('uil-eye-slash');
                });
            });
        });
    });

    // Function to handle form submissions
    function handleFormSubmit(form, endpoint) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData = new FormData(form);
            const formDataObject = {};
            formData.forEach((value, key) => {
                formDataObject[key] = value;
            });

            try {
                const response = await fetch(`http://localhost:3000/${endpoint}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formDataObject),
                });

                const data = await response.json();

                if (data.success) {
                    console.log(data.message);
                    // Redirect or perform other actions on success
                } else {
                    console.error(data.message);
                    // Handle error cases
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }

    // Handle login form submission
    handleFormSubmit(loginForm, 'login');

    // Handle signup form submission
    handleFormSubmit(signupForm, 'signup');

    // Toggle between login and signup forms
    signupLink.addEventListener('click', () => {
        container.classList.add('active');
    });
    loginLink.addEventListener('click', () => {
        container.classList.remove('active');
    });
});
