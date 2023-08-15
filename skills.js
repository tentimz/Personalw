function scrollToRectangle(rectangle1) {
  const rectangle = document.getElementById(`rectangle${rectangle1}`);
  rectangle.scrollIntoView({ behavior: "smooth" });
}

function showImage() {
  var fileContainer = document.getElementById("file-container");
  fileContainer.innerHTML =
    '<img src=" /Users/ftenfati/Desktop/MyPWS/BusinessAnalyst.png" alt="Image"></iframe>';
}
