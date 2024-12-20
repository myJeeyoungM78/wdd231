document.addEventListener('DOMContentLoaded', function() {
    // Set current timestamp
    document.getElementById('timestamp').value = new Date().toISOString();

    // Validate organizational title
    const orgTitleInput = document.getElementById('orgTitle');
    orgTitleInput.addEventListener('input', function() {
        const pattern = /^[A-Za-z\s-]{7,}$/;
        if (this.value && !pattern.test(this.value)) {
            this.setCustomValidity('Please enter at least 7 characters, using only letters, spaces, and hyphens.');
        } else {
            this.setCustomValidity('');
        }
    });
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const formData = document.getElementById('formData');
    const urlParams = new URLSearchParams(window.location.search);
    
    const requiredFields = [
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName', label: 'Last Name' },
        { name: 'email', label: 'Email' },
        { name: 'phone', label: 'Mobile Phone' },
        { name: 'address', label: 'Address' },
        { name: 'timestamp', label: 'Submission Date' }
    ];

    let html = '<ul>';
    requiredFields.forEach(field => {
        const value = urlParams.get(field.name);
        if (value) {
            html += `<li><strong>${field.label}:</strong> ${value}</li>`;
        }
    });
    html += '</ul>';

    formData.innerHTML = html;
});

// console.log(myProfile.placesLived);
// aboutUs.forEach()
//         // get the feedback div element so we can do something with it.
//         const feedbackElement = document.getElementById('feedback');
//         // get the form so we can read what was entered in it.
//         const formElement = document.forms[0];
//         // add a 'listener' to wait for a submission of our form. When that happens run the code below.
//         formElement.addEventListener('submit', function(e) {
//             // stop the form from doing the default action.
//             e.preventDefault();
//             // set the contents of our feedback element to a message letting the user know the form was submitted successfully. Notice that we pull the name that was entered in the form to personalize the message!
//             feedbackElement.innerHTML = 'Hello '+ formElement.user_name.value +'! Thank you for your message. We will get back with you as soon as possible!';
//             // make the feedback element visible.
//             feedbackElement.style.display = "block";
//             // add a class to move everything down so our message doesn't cover it.
//             document.body.classList.toggle('moveDown');
//         });

