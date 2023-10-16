function scrollToRectangle(rectangle1) {
  const rectangle = document.getElementById(`rectangle${rectangle1}`);
  rectangle.scrollIntoView({ behavior: "smooth" });
}

function showImage() {
  var fileContainer = document.getElementById("file-container");
  fileContainer.innerHTML =
    '<img src=" /Users/ftenfati/Desktop/MyPWS/BusinessAnalyst.png" alt="Image"></iframe>';
}

    
//

// file.js
/*function openPopup() {
  var url = "Problem Solving.html";
  var popupWindow = window.open(url, "Popup", "width=500,height=300");
  if (popupWindow) {
      popupWindow.focus();
  }
  return false;
}*/

function openPopup(url) {
  var popupWindow = window.open(url, "Popup", "width=500,height=300");
  if (popupWindow) {
    popupWindow.focus();
  }
  return false;
}
