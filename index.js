        // Get the modal
        let modal = document.getElementById("myModal");

        // Get the button that opens the modal
        let btn = document.getElementById("openModal");

        // Get the <span> element that closes the modal
        let span = document.getElementById("closeModal");

        // Get the read more button
        let readMoreBtn = document.getElementById("readMoreBtn");

        // Get the explore text
        let exploreText = document.getElementById("exploreText");

        // Fade in explore text on page load
        window.onload = function() {
            exploreText.style.opacity = 1;
        };

        // When the user clicks the button, animate the button and then open the modal
        btn.onclick = function() {
            // Animate the button first
            btn.style.transform = "scale(0.8)"; // Adjust the scale value to make it cave in more
            setTimeout(function() {
                btn.style.transform = "scale(1)";
                // Show the modal after animation completes
                modal.style.display = "block";
                // Animate the explore text
                exploreText.style.opacity = 0; // Fade out the explore text
                setTimeout(function() {
                    exploreText.style.display = "none"; // Hide the explore text after fading out
                }, 500); // Adjust the delay to match the duration of the fade-out animation
            }, 300); // Adjust the delay for smoother effect
        }

        // When the user clicks on <span> (x) or the read more button, close the modal
        span.onclick = readMoreBtn.onclick = function() {
            modal.style.display = "none";
            // Reset explore text styles
            exploreText.style.display = "block";
            exploreText.style.opacity = 1;
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                // Reset explore text styles
                exploreText.style.display = "block";
                exploreText.style.opacity = 1;
            }
        }