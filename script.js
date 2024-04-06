document.addEventListener("DOMContentLoaded", function() {
    // DOM elements
    var startButton = document.getElementById('startButton');
    var girlSprite = document.getElementById('girl');
    var balloons = document.querySelectorAll('.balloon');

    // Event listener for the start button
    startButton.addEventListener('click', function() {
        alert('Release the balloons!');
    });

    // Event listeners for arrow keys
    document.addEventListener('keydown', function(event) {
        var key = event.key;
        if (key === 'ArrowLeft') {
            // Move girl sprite left
            moveGirlLeft();
        } else if (key === 'ArrowRight') {
            // Move girl sprite right
            moveGirlRight();
        }
    });

    // Function to move girl sprite left
    function moveGirlLeft() {
        var currentLeft = parseInt(window.getComputedStyle(girlSprite).left);
        girlSprite.style.left = (currentLeft - 10) + 'px';
        checkBalloonCollision();
    }

    // Function to move girl sprite right
    function moveGirlRight() {
        var currentLeft = parseInt(window.getComputedStyle(girlSprite).left);
        girlSprite.style.left = (currentLeft + 10) + 'px';
        checkBalloonCollision();
    }

    // Function to check collision between girl and balloons
    function checkBalloonCollision() {
        balloons.forEach(function(balloon) {
            if (isCollision(girlSprite, balloon)) {
                // Move balloons up
                var currentTop = parseInt(window.getComputedStyle(balloon).top);
                if (currentTop > 0) {
                    balloon.style.top = (currentTop - 20) + 'px'; // Adjust the decrement value as needed
                } else {
                    // Hide balloon
                    balloon.style.display = 'none';
                    // Display "Happy Birthday" message
                    displayHappyBirthday();
                }
            }
        });
    }

    // Function to check collision between two elements
    function isCollision(a, b) {
        var aRect = a.getBoundingClientRect();
        var bRect = b.getBoundingClientRect();
        return !(
            aRect.top + aRect.height < bRect.top ||
            aRect.top > bRect.top + bRect.height ||
            aRect.left + aRect.width < bRect.left ||
            aRect.left > bRect.left + bRect.width
        );
    }

    // Function to display "Happy Birthday" message
    function displayHappyBirthday() {
        // Create a new element for "Happy Birthday" text
        var happyBirthday = document.createElement('div');
        happyBirthday.textContent = 'Happy Birthday!';
        happyBirthday.style.position = 'absolute';
        happyBirthday.style.top = '0px'; // Display at the top of the page
        happyBirthday.style.left = '50%';
        happyBirthday.style.transform = 'translateX(-50%)';
        happyBirthday.style.fontSize = '32px';
        happyBirthday.style.color = 'red';
        happyBirthday.style.fontWeight = 'bold';
        happyBirthday.style.zIndex = '9999'; // Ensure it's on top of other elements
        document.body.appendChild(happyBirthday);
    }
});
