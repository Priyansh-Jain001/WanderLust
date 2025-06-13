( () => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  } )
  
  ();

  // Calander Script

  document.addEventListener("DOMContentLoaded", function () {
    var selectedCheckinDate = null;
    var selectedCheckoutDate = null;

    // Initialize Flatpickr for Check-in Date
    var checkinPicker = flatpickr("#checkinDate", {
        enableTime: false,
        dateFormat: "Y-m-d",
        minDate: "today",
        onChange: function (selectedDates, dateStr) {
            selectedCheckinDate = dateStr;
            document.getElementById("selectedCheckinText").innerHTML = `<b>Check-in Date: ${selectedCheckinDate}</b>`;
        }
    });

    // Initialize Flatpickr for Checkout Date (will be enabled after check-in is selected)
    var checkoutPicker = flatpickr("#checkoutDate", {
        enableTime: false,
        dateFormat: "Y-m-d",
        onOpen: function () {
            if (!selectedCheckinDate) {
                alert("Please select a check-in date first!");
                checkoutPicker.close();
            } else {
                checkoutPicker.set("minDate", selectedCheckinDate);
            }
        },
        onChange: function (selectedDates, dateStr) {
            selectedCheckoutDate = dateStr;
            document.getElementById("selectedCheckoutText").innerHTML = `<b>Checkout Date: ${selectedCheckoutDate}</b>`;
        }
    });

    // When "Next" is clicked, close Check-in Modal and open Checkout Modal
    document.getElementById("nextToCheckoutBtn").addEventListener("click", function () {
        if (selectedCheckinDate) {
            var checkinModal = new bootstrap.Modal(document.getElementById("checkinModal"));
            checkinModal.hide();

            var checkoutModal = new bootstrap.Modal(document.getElementById("checkoutModal"));
            checkoutModal.show();
        } else {
            alert("Please select a check-in date first!");
        }
    });

    // When "Confirm Booking" is clicked
    document.getElementById("confirmBookingBtn").addEventListener("click", function () {
        if (selectedCheckinDate && selectedCheckoutDate) {
            alert(`Booking Confirmed!\nCheck-in: ${selectedCheckinDate}\nCheckout: ${selectedCheckoutDate}`);
        } else {
            alert("Please select both check-in and checkout dates.");
        }
    });
});