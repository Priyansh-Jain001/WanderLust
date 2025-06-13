// getSelectedOptionValue = ()=> {
//     // Get the <select> element by its class name
//     const selectElement = document.querySelector(".selectBy");
    
//     // Retrieve the value of the selected option
//     const selectedValue = selectElement.value;
    
//     // Use or log the selected value
//     console.log(selectedValue)
    
//     const url = `http://localhost:8080/listings/search?q=${encodeURIComponent(selectedValue)}`;

//     // Navigate to the new URL (this triggers the GET request with the query parameter)
//      window.location.href = url;
// }

// // Add an event listener to run the function when the selection changes
// const selectElement = document.querySelector(".btn-search");
    
// selectElement.addEventListener("click", getSelectedOptionValue);

// Handle form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get selected value from the dropdown
    const selectElement = document.querySelector('.selectBy');
    const selectedValue = selectElement.value;

    // Get input value from the text field
    const inputElement = document.getElementById('input');
    const inputValue = inputElement.value;

    // Construct the URL with query parameters
    const url = `/listings/search?selectedValue=${encodeURIComponent(selectedValue)}&searchTerm=${encodeURIComponent(inputValue)}`;

    // Redirect to the constructed URL (this simulates a form submission with query params)
    window.location.href = url;
});

