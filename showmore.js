document.querySelectorAll('.showmore-button').forEach(button => {
    button.addEventListener('click', function() {
        let targetId = this.getAttribute('data-target'); // Ensure this attribute exists on all buttons
        if (targetId) { // Check if targetId is not null or undefined
            let content = document.getElementById(targetId);
            if (content) { // Check if the content element exists
                if (content.style.display === "none" || content.style.display === "") {
                    content.style.display = "block"; // Show the content
                    this.textContent = "Show Less"; 
                } else {
                    content.style.display = "none"; // Hide the content
                    this.textContent = "Show More";
                }
            }
        }
    });
});