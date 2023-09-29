if (!localStorage.getItem('user')) window.location.href = 'login.html';

$(document).ready(function() {
  function generateQuantityOptions(selectedQuantity = 1) {
    let optionsHtml = "";
    for (let i = 1; i <= 10; i++) {
      const selected = i === selectedQuantity ? 'selected' : '';
      optionsHtml += `<option value="${i}" ${selected}>${i}</option>`;
    }
    return optionsHtml;
  }  

  const cardData = JSON.parse(localStorage.getItem("cardData"));

  if (cardData && Array.isArray(cardData)) {
    const cartTableBody = $("#cartTableBody");

    cardData.forEach((card, index) => {
      const productRow = $("<tr>");
      productRow.html(`
          <td>
          <div class="row mb-4 d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2" id="productimg">
              <img src="${card.imageUrl}" class="img-fluid rounded-3" alt="Product Image">
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4">
              <h6 class="text-muted">${card.cardTitle}</h6>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1">
              <h6 class="text-muted">${card.optionSize.join('')}</h6>
            </div>
              <div class="col-md-2 col-lg-2 col-xl-2">
              <div class="d-flex align-items-center">
              <select class="quantity-input" data-rowid="${index}" id="quantity-input-${index}">
                  ${generateQuantityOptions(card.quantity = 1)}
                  </select>
              </div>
          </div>
            <div class="col-md-2 col-lg-2 col-xl-2">
              <h6 class="text-black mb-0">${'$'+card.productprice}</h6>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1">
              <a href="#" class="btn btn-primary remove_this_product" data-rowid="${index}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                </svg>
              </a>
            </div>
          </div>
        </td>
      `);

      cartTableBody.append(productRow);
    });

    // Function to calculate and update the total price
    function updateTotalPrice() {
      const totalPrice = calculateTotalPrice(cardData);
      $("#totalPrice").text("$" + totalPrice.toFixed(2));
      $("#subtotal").text("$" +totalPrice.toFixed(2));

      const selectedValue = parseFloat($("#shippingOption").val());
      if (!isNaN(selectedValue)) {
        const grandTotal = totalPrice + selectedValue;
        $("#grandTotal").text("$" + grandTotal.toFixed(2));
        $("#total").text("$" + grandTotal.toFixed(2));
      }
    }

    // Add a change event handler for quantity inputs
    $(".quantity-input").change(function() {
      const rowId = $(this).data("rowid");
      const newQuantity = parseInt($(this).val());

      if (!isNaN(newQuantity)) {
        cardData[rowId].quantity = newQuantity;
        localStorage.setItem("cardData", JSON.stringify(cardData));

        updateTotalPrice();
      }
    });

    // Calculate and display the initial total price
    updateTotalPrice();
  } else {
    // alert("No card data found in localStorage.");
    
  }

  $(".remove_this_product").click(function() {
    var rowId = $(this).data("rowid");
    removeRowAndData(rowId);
    location.reload();
  });

  function removeRowAndData(rowId) {
    $(`#cartTableBody tr:eq(${rowId})`).remove();
    cardData.splice(rowId, 1);
    localStorage.setItem("cardData", JSON.stringify(cardData));
    updateTotalPrice();
  }

  function calculateTotalPrice(cardData) {
    let totalPrice = 0;

    if (cardData && Array.isArray(cardData)) {
      cardData.forEach((item) => {
        const productPrice = parseFloat(item.productprice);
        const quantity = item.quantity;

        if (!isNaN(productPrice) && !isNaN(quantity)) {
          const itemTotal = productPrice * quantity;
          totalPrice += itemTotal;
        }
      });
    }

    return totalPrice;
  }

  $("#shippingOption").change(function() {
    const selectedValue = parseFloat($(this).val());

    if (!isNaN(selectedValue)) {
      const totalPrice = calculateTotalPrice(cardData);
      const grandTotal = totalPrice + selectedValue;

      $("#grandTotal").text("$" + grandTotal.toFixed(2));
    }
  });

  const itemCount = cardData ? cardData.length : 0;
  $(".itemCountDisplay").text(itemCount + ' items');


    // Function to update the #shipping element and recalculate totals
    function updateShippingAndTotal() {
      const selectedValue = parseFloat($("#shippingOption").val());
  
      if (!isNaN(selectedValue)) {
        // Update the #shipping element
        $("#shipping").text("$" + selectedValue.toFixed(2));
  
        // Recalculate and update the #grandTotal and #total elements
        const totalPrice = calculateTotalPrice(cardData);
        const grandTotal = totalPrice + selectedValue;
  
        $("#grandTotal").text("$" + grandTotal.toFixed(2));
        $("#total").text("$" + grandTotal.toFixed(2));
      }
    }
  
    // Add a change event handler for #shippingOption
    $("#shippingOption").change(function() {
      updateShippingAndTotal();
    });
  
    // Calculate and display the initial shipping and total values
    updateShippingAndTotal();



    function showAlert() {
      var alert_card = document.getElementsByClassName('alert-card').textcontact;
  
      alert(alert_card);
    }
  
        // Add an event listener to the link
      document.getElementById("backToShopLink").addEventListener("click", function() {
          // Go back in the browser's history
          history.back();
      });
        $(document).ready(function() {
          // Retrieve the cardData from localStorage
          const cardData = JSON.parse(localStorage.getItem("cardData"));
  
          if (cardData && Array.isArray(cardData)) {
            const itemCount = cardData.length;
            $("#notification").text(itemCount);
          } else {
            console.log("Card data not found or is not an array.");
          }
        });
        $(document).ready(function() {
          $("#open-popup").click(function() {
            $(".popup").fadeIn();
          });
  
          $(".close").click(function() {
            $(".popup").fadeOut();
          });
        });
  
    function validateCardNumber(cardNumber) {
      var isValid = /^\d{16}$/.test(cardNumber);
      if (!isValid) {
          $('#cardNumber').addClass('error');
      } else {
          $('#cardNumber').removeClass('error');
      }
      return isValid;
  }

  function validateExpiryDate(expiryDate) {
      var isValid = /^\d{2}\/\d{2}$/.test(expiryDate);
      if (!isValid) {
          $('#expiryDate').addClass('error');
      } else {
          $('#expiryDate').removeClass('error');
      }
      return isValid;
  }

  function validateCVVCode(cvvCode) {
      var isValid = /^\d{3}$/.test(cvvCode);
      if (!isValid) {
          $('#cvvCode').addClass('error');
      } else {
          $('#cvvCode').removeClass('error');
      }
      return isValid;
  }

  $('#submitBtn').on('click', function() {
      var cardNumber = $('#cardNumber').val();
      var expiryDate = $('#expiryDate').val();
      var cvvCode = $('#cvvCode').val();

      var isCardValid = validateCardNumber(cardNumber);
      var isExpiryDateValid = validateExpiryDate(expiryDate);
      var isCVVCodeValid = validateCVVCode(cvvCode);

      if (isCardValid && isExpiryDateValid && isCVVCodeValid) {
          alert('Form submitted successfully!');
      } else {
          alert('Please correct the errors in the form.');
      }
  });

  $("#btnpay").prop("disabled", true);

  $("input").on("input", function() {

      if ($("#cardNumber").val() !== "" && $("#nameOnCard").val() !== "" && $("#expiryDate").val() !== "" && $("#cvvCode").val() !== "") {
          $("#btnpay").prop("disabled", false);
      } else {
          $("#btnpay").prop("disabled", true);
      }
  });
    // Add an input event listener to the PayPal email input field
    $("#paypalEmail").on("input", function() {
      // Enable the "Place order" button when PayPal is selected and an email is provided
      if ($("#payment2").is(":checked") && $(this).val() !== "") {
          $("#btnpay").prop("disabled", false);
      } else {
          $("#btnpay").prop("disabled", true);
      }
  });

  // Add a change event listener to the radio button
  $("#payment2").change(function() {
      // Disable the "Place order" button if PayPal is not selected
      if (!$(this).is(":checked")) {
          $("#btnpay").prop("disabled", true);
      } else {
          // Enable the button if PayPal is selected and an email is provided
          if ($("#paypalEmail").val() !== "") {
              $("#btnpay").prop("disabled", false);
          }
      }
  });
  
  $("#btnpay").click(function() {

      localStorage.removeItem("cardData");
      alert("Payment successful.");
      location.reload(); // Reload the page
  });

});


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

// document.addEventListener('keydown', function (event) {
//   if (event.key === "Enter") {
//     $('#open-popup').click();
//   }
// });
$(document).on('keydown', function (event) {
  if (event.key === "Enter")
      $('#open-popup').click();
});