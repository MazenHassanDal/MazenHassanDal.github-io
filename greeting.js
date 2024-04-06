document.addEventListener('DOMContentLoaded', function() {
    var now = new Date();
    var hour = now.getHours();
    var greeting;

    if (hour < 6) {
        greeting = "Good Night Rider!";
    } else if (hour < 12) {
        greeting = "Good Morning Rider!";
    } else if (hour < 18) {
        greeting = "Good Afternoon Rider!";
    } else if (hour < 24) {
        greeting = "Good Evening Rider!";
    } else {
        greeting = "Hello";
    }

    document.getElementById('greeting').innerText = greeting;
});
