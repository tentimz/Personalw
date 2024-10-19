function scrollToRectangle(rectangle1) {
  const rectangle = document.getElementById(`rectangle${rectangle1}`);
  rectangle.scrollIntoView({ behavior: "smooth" });
}

function showImage() {
  var fileContainer = document.getElementById("file-container");
  fileContainer.innerHTML =
    '<img src=" /Users/ftenfati/Desktop/MyPWS/BusinessAnalyst.png" alt="Image"></iframe>';
}


document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('square1').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'Administrator.pdf';
  });
});

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('square2').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'AdvancedAdministrator.pdf';
  });
});

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('square3').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'dev1.pdf';
  });
});
document.addEventListener("DOMContentLoaded", function() {
 
  document.getElementById('square4').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'BusinessAnalyst.pdf';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById('square5').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'AppBuilder.pdf';
  });
});


document.addEventListener("DOMContentLoaded", function() {
 
  document.getElementById('square6').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://www.salesforce.com/trailblazer/ftenfati';
});
});

document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById('square7').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://www.credly.com/badges/9409c8c9-e900-4470-8d2d-b687c4c3c11c/public_url';
});
});

document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById('square8').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://www.credly.com/badges/5658a623-ba29-4c43-8005-f4c21aad262c/public_url';
});
});
