const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

// Image Section
const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}

// form
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var locationInput = document.getElementById("location");
  locationInput.value = latitude + ", " + longitude;
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
      break;
  }
}

function reverseGeocode(latitude, longitude) {
  // Construct the API request URL with latitude and longitude parameters
  const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=YOUR_API_KEY`;

  // Send the API request
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Parse the API response and extract the address
      const address = data.results[0].formatted_address;

      // Do something with the address (e.g. update a form field)
      document.getElementById("location").value = address;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the reverseGeocode function with latitude and longitude values
const latitude = 37.7749;
const longitude = -122.4194;
reverseGeocode(latitude, longitude);




//Form Validation

// Validate name input box


  function validateName() {
    var namee = document.getElementById("name");
    var nameRegex = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

    if (namee.value.match(nameRegex)) {
      document.getElementById("name").style.borderColor = "green";
    } else {
      alert("Name Should Contain Only Characters");
    }
  }

  // Making First Character Into Uppercase
  function capitalizeFirstLetter() {
    const nameInput = document.getElementById("name");
    // Get the name input field

    // Listen for input events on the name input field
    nameInput.addEventListener("input", function (event) {
      // Get the current value of the input field
      let name = event.target.value;

      // Convert the first character to uppercase
      name = name.charAt(0).toUpperCase() + name.slice(1);

      // Convert the first character after a space to uppercase as well
      name = name.replace(/\s[a-z]/g, function (match) {
        return match.toUpperCase();
      });

      // Set the new value of the input field
      event.target.value = name;
    });
  }

  // Validate contact input box

  function validateContact() {
    var contact_no = document.getElementById("contact");
    var contactRegex = /[6-9]{1}[0-9]{9}$/;

    if (contact_no.value.match(contactRegex)) {
      document.getElementById("contact").style.borderColor = "green";
    } else {
      alert(
        "Phone Number Should Be Off 10 Digits only And It Must Start Bet 6-9");
    
    }
  }

  // Validate mail input box

  function validateMail() {
    var mail = document.getElementById("yourmail");
    var mailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (mail.value.match(mailRegex)) {
      document.getElementById("yourmail").style.borderColor = "green";
    } else {
      alert("Invalid Mail");
    }
  }

  //Validating Picture Input Box
  function validatePicture() {
    const fileInput = document.getElementById("picture");

    fileInput.addEventListener("input", () => {
      const file = fileInput.files[0];
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (file.size > maxSize) 
      {
        alert("Please upload an image that is smaller than 2MB.");
        fileInput.value = "";
      }
    });
  }