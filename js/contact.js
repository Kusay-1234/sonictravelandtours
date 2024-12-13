// Initialize EmailJS
emailjs.init('c6Vxh0RIb0rnosOEG'); // Replace 'YOUR_USER_ID' with your EmailJS User ID

// Function to send email using EmailJS
function sendEmail(serviceID, templateID, params) {
    emailjs.send(serviceID, templateID, params)
        .then(response => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
        })
        .catch(error => {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again.');
        });
}

// Handle "Send a Message" form submission
document.querySelector('.form button').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const message = document.getElementById('sms').value;

    if (name && email && message) {
        const params = {
            from_name: name,
            email_id: email,
            message: message
        };
        sendEmail('service_0snnrr5', 'template_m4vdret', params); // Replace with your Service ID and Template ID
    } else {
        alert('Please fill out all fields.');
    }
});

// Handle footer form submission
document.querySelector('.send').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default form submission

    const email = document.querySelector('footer input[type="email"]').value;
    const message = document.querySelector('footer input[type="text"]').value;

    if (email && message) {
        const params = {
            email_id: email,
            message: message
        };
        sendEmail('service_0snnrr5', 'template_m4vdret', params); // Replace with your Service ID and Template ID
    } else {
        alert('Please fill out all fields.');
    }
});