document.getElementById('batmanMode').addEventListener('click', function() {
    // Change the general color scheme to yellow
    document.querySelector('header h1 a').style.color = 'yellow'; // Adjust header text to yellow
    document.querySelectorAll('.nav-links a, #greeting, .sec1 p, .sec1 li, .sec2-title h2, .sec2-content, #notifyButton img').forEach(el => el.style.color = 'yellow');
    
    // Update the notify button image to reflect the Batman theme
    document.getElementById('notifyButton').src = '/path/to/batman/button/image'; // I couldnt change the color of the img
    document.getElementById('hoverNotify').style.backgroundColor = 'yellow';
    document.getElementById('hoverNotify').style.color = 'black';

    // Change the form's background color to light blue and labels to black
    document.querySelector('.form-section').style.backgroundColor = 'lightblue';
    document.querySelectorAll('.form-section label').forEach(label => label.style.color = 'black');
    
    // Adjust the color of inputs and textarea for readability
    document.querySelectorAll('.form-section input, .form-section select, .form-section textarea').forEach(input => {
        input.style.backgroundColor = 'white';
        input.style.color = 'black';
    });

    // Adjust additional elements for the Batman mode as needed
});



document.getElementById('robinMode').addEventListener('click', function() {
    // Set the header, greeting, and navbar text colors to green
    document.querySelector('header h1 a').style.color = 'green'; // Adjust header text to green
    document.getElementById('greeting').style.color = 'green'; // Set greeting text to green
    document.querySelectorAll('.nav-links a').forEach(el => el.style.color = 'green'); // Set navbar texts to green
    
    // Set sec1 and sec2 texts to yellow
    document.querySelectorAll('.sec1, .sec1 p, .sec1 li, .sec2-title h2, .sec2-content').forEach(el => el.style.color = 'yellow');
    
    // Update the notify button image to reflect the Robin theme
    document.getElementById('notifyButton').src = '/path/to/robin/button/image'; // Ensure this path points to a green-themed image

    // Adjust the hoverNotify text and background for the Robin theme
    document.getElementById('hoverNotify').style.color = 'green';
    document.getElementById('hoverNotify').style.backgroundColor = 'transparent'; // You may adjust the background as needed

    // Change the form's background color to red, ensuring label text is set to be readable against the red background
    document.querySelector('.form-section').style.backgroundColor = 'rgba(255, 0, 0, 0.459)';
    document.querySelectorAll('.form-section label').forEach(label => label.style.color = 'white'); // Adjusting label colors for readability
    
    // Adjust the color of inputs and textarea for readability against the red background
    document.querySelectorAll('.form-section input, .form-section select, .form-section textarea').forEach(input => {
        input.style.backgroundColor = 'white'; // White background for input fields for contrast
        input.style.color = 'black'; // Black text for readability
    });

    // Ensure other elements also follow the Robin theme as necessary
});

document.getElementById('resetScheme').addEventListener('click', function() {
    // Reset header text color
    document.querySelector('header h1 a').style.color = ''; // Resets to the stylesheet default

    // Reset styles for various elements to their default
    document.querySelectorAll('.nav-links a, #greeting, .sec1 p, .sec1 li, .sec2-title h2, .sec2-content').forEach(el => el.style.color = '');

    // Reset the notify button image to the default
    document.getElementById('notifyButton').src = '/path/to/default/button/image'; // Ensure this path points to the default image

    // Reset the form's background color and labels
    document.querySelector('.form-section').style.backgroundColor = ''; // Revert to default
    document.querySelectorAll('.form-section label').forEach(label => label.style.color = '');
    
    // Reset the color of inputs and textarea to default
    document.querySelectorAll('.form-section input, .form-section select, .form-section textarea').forEach(input => {
        input.style.backgroundColor = '';
        input.style.color = '';
    });

    // Reset additional elements to their default styles as needed
});
