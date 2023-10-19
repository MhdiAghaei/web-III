// Get the modal element
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Event listener to open the modal when clicked
document.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Event listener to close the modal when the close button is clicked
closeBtn.addEventListener("click", closeModal);
