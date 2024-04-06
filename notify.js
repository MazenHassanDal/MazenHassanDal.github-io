document.getElementById("notifyButton").addEventListener('click', function() {
    if (!("Notification" in window)) {
        alert("Your browser does not support notifications");
    } else if (Notification.permission === "granted") {
        new Notification("You are now subscribed!");
    }
});

document.getElementById("notifyButton").addEventListener('mouseenter', function() {
    document.getElementById("hoverNotify").style.display = 'block';
});
document.getElementById("notifyButton").addEventListener('mouseleave', function() {
    document.getElementById("hoverNotify").style.display = 'none';
});