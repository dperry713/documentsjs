document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const userDataArray = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all required fields.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const userData = {
            name: name,
            email: email,
            message: message
        };

        userDataArray.push(userData);
        console.log('User data stored:', userData);
        console.log('All user data:', userDataArray);

        form.reset();
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
