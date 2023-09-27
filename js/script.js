// Check if the user is logged in (i.e., 'user' item exists in localStorage)
if (!localStorage.getItem('user')) {
  // If not logged in, redirect to the login page
  window.location.href = 'login.html';
}
function showAlert() {
  var alert_card = document.getElementsByClassName('alert-card').textcontact;

  alert('Do you want to order this product right now?');
}


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

function back(){
  history.back();
}

  var backToShopLink = document.getElementById('backToShopLink');
  backToShopLink.addEventListener("click", back);

var showcard = document.getElementById('showcard');

showcard.addEventListener('click', showAlert);

$(document).ready(function() {
  const cardData = JSON.parse(localStorage.getItem("cardData"));

  if (cardData && Array.isArray(cardData)) {
    const itemCount = cardData.length;
    if (itemCount > 0) {
      $("#notification").text(itemCount);
    } else {
      $("#notification").hide();
    }
  } else {
    console.log("Card data not found or is not an array.");
  }
});
