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
    window.location.href = 'https://youtu.be/-DRNJzmNOC4?si=4raOKR24UhMa9EDb';
  });
});

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('square2').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'sfdatabase.html';
  });
});

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('square3').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://trailhead.salesforce.com/content/learn/superbadges/superbadge_apex';
  });
});
document.addEventListener("DOMContentLoaded", function() {
 
  document.getElementById('square4').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://trailhead.salesforce.com/content/learn/modules/lex_dev_visualforce';
  });
});

document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById('square5').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://trailhead.salesforce.com/content/learn/modules/soql-for-admins?trailmix_creator_id=filholmc&trailmix_slug=sql-soql-and-sosl';
  });
});


document.addEventListener("DOMContentLoaded", function() {
 
  document.getElementById('square6').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://trailhead.salesforce.com/content/learn/modules/pw-api-basics';
});
});

document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById('square7').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://trailhead.salesforce.com/content/learn/trails/discover-sales-cloud';
});
});

document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById('square8').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'webdev.html';
});
});
document.addEventListener("DOMContentLoaded", function() {
  
  document.getElementById('square9').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'https://trailhead.salesforce.com/content/learn/modules/lex_implementation_user_setup_mgmt?trailmix_creator_id=adhawan1&trailmix_slug=security-permission-set-profiles-roles';
});
});
