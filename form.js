document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('giveawayForm').querySelector('form');

    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting until checks are passed
        event.preventDefault();

        // Name validation
        const name = document.getElementById('name').value;
        if (!name.trim()) {
            alert("Name is required.");
            return;
        }

        // Email validation
        const email = document.getElementById('email').value;
        const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone validation
        const phone = document.getElementById('phone').value;
        const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must be in the format 123-456-7890.");
            return;
        }

        // Province selection validation
        const province = document.querySelector('#giveawayForm select[name="province"]').value;
        if (!province) {
            alert("Please select a province.");
            return;
        }

        // Items selection validation
        const items = document.querySelector('#giveawayForm select[name="items"]').value;
        if (!items) {
            alert("Please select an item.");
            return;
        }

        // Reason (Comments) validation
        const comment = document.getElementById('comment').value;
        if (!comment.trim()) {
            alert("Please tell us why you like motorcycles.");
            return;
        }

        alert("Form validation passed. Form submitted successfully!");
    });
});
