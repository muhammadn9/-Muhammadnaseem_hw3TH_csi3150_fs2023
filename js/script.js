function scrollToTarget() {
  var targetSection = document.querySelector(".background2");

  // Scroll to the target section smoothly
  targetSection.scrollIntoView({ behavior: "smooth" });
}
function toggleMoreInfo() {
  var moreInfo = document.querySelector(".more-info");
  var button = document.querySelector(".read-more-button");

  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "block";
    button.textContent = "Read Less";
  } else {
    moreInfo.style.display = "none";
    button.textContent = "Read More";
  }
}
