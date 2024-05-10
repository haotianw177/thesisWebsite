// la la la la la la________________________ what loading speed?
// hand-made by Haotian Wang, 04/17/2024
// i was listening to Grimes on repeat
// for maintenance request email @haotianwang.design@gmail.com
// bro window resize is such a pain in the ass

const textContainer = document.querySelector('.rightScreenContainer');
const textItems = textContainer.querySelectorAll('.rightScreenContent');
const toggleButtons = document.querySelectorAll('.categoriesMenuButton');
const toggleButton = document.getElementById('toggleButton');
const dropdownMenu = document.getElementById('dropdownMenu');

let currentActiveText = 0;

// Set initial active text content
textItems[currentActiveText].classList.add('active');

window.setActiveText = function (index) {
    textItems.forEach(item => item.classList.remove('active'));

    if (textItems[index]) {
        currentActiveText = index;
        textItems[currentActiveText].classList.add('active');
    }
    // Hide dropdown if in phone mode after selecting an item
    if (window.innerWidth <= 768) { 
        dropdownMenu.style.display = 'none';
    }
}

for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', function() {
        setActiveText(i);
    });
}

toggleButton.addEventListener('click', () => {
    if (dropdownMenu.style.display === 'block' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

function displayButtonsAccordingToViewport() {
  if (window.innerWidth <= 768) {
      // Ensures that the dropdown menu is shown on mobile on load
      dropdownMenu.style.display = 'block'; // Change to 'block' to show on mobile
  } else {
      dropdownMenu.style.display = 'block'; // Ensures it's always shown on larger screens
  }
}

window.addEventListener('load', displayButtonsAccordingToViewport);
window.addEventListener('resize', displayButtonsAccordingToViewport);


for (let i = 0; i < toggleButtons.length; i++) {
  toggleButtons[i].addEventListener('click', function() {
      // Hide all content sections before showing the selected one
      textItems.forEach(item => {
          item.style.display = 'none';  // Hide all content sections
      });

      setActiveText(i); // Set the clicked one as active

      if (window.innerWidth <= 768) {  // Check if it's in mobile view
          document.querySelectorAll('.leftContainer .headerInfo, .leftContainer .footerInfo').forEach(elem => {
              elem.style.display = 'none';  // Hide text elements in the leftContainer
          });
          textItems[i].style.display = 'block';  // Display only the clicked content
      }
  });
}

toggleButton.addEventListener('click', () => {
  let isMenuOpen = dropdownMenu.style.display === 'block' || dropdownMenu.style.display === '';
  dropdownMenu.style.display = isMenuOpen ? 'none' : 'block';

  if (isMenuOpen) {
      document.querySelectorAll('.leftContainer .headerInfo, .leftContainer .footerInfo').forEach(elem => {
          elem.style.display = 'block';  // Show text elements when menu is closed
      });
      textItems.forEach(item => item.style.display = 'none');  // Hide all content sections when closing menu
  } else {
      document.querySelectorAll('.leftContainer .headerInfo, .leftContainer .footerInfo').forEach(elem => {
          elem.style.display = 'none';  // Hide text elements when menu is open
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const toggleButtons = document.querySelectorAll('.categoriesMenuButton');
  const textItems = document.querySelectorAll('.rightScreenContent');
  const dropdownMenu = document.getElementById('dropdownMenu');
  const toggleButton = document.getElementById('toggleButton');

  // Function to control visibility of content sections
  function setActiveText(index) {
    textItems.forEach((item, idx) => {
      item.style.display = idx === index ? 'block' : 'none'; // Show only the active item
    });
  }

  // Set the default visibility for desktop
  if (window.innerWidth > 768) {
    setActiveText(0); // Display the first item by default on desktop
  } else {
    setActiveText(null); // No content displayed by default on mobile
  }

  // Button click events
  toggleButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      setActiveText(index);
      if (window.innerWidth <= 768) {
        dropdownMenu.style.display = 'none'; // Hide the menu after selection on mobile
      }
    });
  });
  

  // Toggle menu visibility on mobile
  toggleButton.addEventListener('click', function() {
    if (dropdownMenu.style.display === 'block' || dropdownMenu.style.display === '') {
      dropdownMenu.style.display = 'none';
    } else {
      dropdownMenu.style.display = 'block';
    }
  });

  // Ensure correct display on resize
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      // Desktop-specific adjustments
      dropdownMenu.style.display = 'block'; // Ensure the dropdown is always visible on desktop
      document.querySelectorAll('.leftContainer .headerInfo, .leftContainer .footerInfo').forEach(elem => {
        elem.style.display = 'block'; // Ensure all leftContainer elements are visible on desktop
      });
  
      // Ensure that the appropriate rightScreenContent is displayed
      if (!textItems[currentActiveText] || textItems[currentActiveText].style.display === 'none') {
        setActiveText(currentActiveText); // Ensure current or default content is visible
      }
    } else {
      // Mobile-specific adjustments
      dropdownMenu.style.display = 'none'; // Keep the dropdown hidden until toggled on mobile
      textItems.forEach(item => item.style.display = 'none'); // Hide all right screen content on mobile initially
    }
  });
  
  // Function to set active text, improved to ensure visibility handling
  function setActiveText(index) {
    textItems.forEach((item, idx) => {
      item.style.display = 'none'; // Hide all first
    });
    if (textItems[index]) {
      textItems[index].style.display = 'block'; // Show only the active item
    }
  }  
});

// jquery for image preview
// $(document).ready(function() {
//   // When any image is clicked
//   $('img').on('click', function(e) {
//       e.stopPropagation(); // Prevent the click from bubbling up
//       var src = $(this).attr('src'); // Get the source of the clicked image
//       $('#imagePreviewModal img').attr('src', src); // Set the src for the modal image
//       $('#imagePreviewModal').fadeIn(300); // Fade in the modal
//       $('#imagePreviewModal').css('display', 'flex'); // Ensure it is displayed as flex
//   });

//   // Click on the modal background to close
//   $('#imagePreviewModal').on('click', function() {
//       $(this).fadeOut(300, function() {
//           $('#imagePreviewModal img').attr('src', ''); // Clear the src
//       }); // Fade out the modal
//   });

//   // Stop propagation when clicking on the modal image
//   $('#imagePreviewModal img').on('click', function(e) {
//       e.stopPropagation(); // Prevent the click from closing the modal
//   });
// });


