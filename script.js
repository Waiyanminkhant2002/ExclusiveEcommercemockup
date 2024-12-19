// Select all images inside the container
const images = document.querySelectorAll(".mockup-content img");

// Initialize variables
let currentIndex = 0; // Start with the first image
const transitionDuration = 500; // Transition duration in milliseconds
const displayDuration = 1000; // Time to display each image

// Function to show the current image
function showImage(index) {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.transition = `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`;
      img.style.opacity = "1"; // Make the current image visible
      img.style.transform = "translateY(0)"; // Reset the image position
    } else {
      img.style.opacity = "0"; // Hide other images
      img.style.transform = "translateY(20px)"; // Apply slight transition effect for other images
    }
  });
}

// Function to handle the cycling of images
function cycleImages() {
  // Show the current image
  showImage(currentIndex);

  // Move to the next image, looping back to the first
  currentIndex = (currentIndex + 1) % images.length;
}

// Show the first image initially
showImage(currentIndex);

// Start the automatic cycling of images
setInterval(cycleImages, displayDuration);
