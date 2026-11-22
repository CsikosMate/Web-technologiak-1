function sendForm() {
    var nameElement = document.getElementById("name")
    var nameError = document.getElementById("nameError")
    if (nameElement.value === "" || nameElement.value.length < 10) {
        nameError.style.display='block'
        nameElement.style.background = 'red';
    } else {
        nameError.style.display='none'
        nameElement.style.background = '';
    }

    var motherNameElement = document.getElementById("motherName");
    var motherNameError = document.getElementById("motherNameError");
    if (motherNameElement.value === "" || motherNameElement.value.length < 10) {
        motherNameError.style.display = 'block';
        motherNameElement.style.background = 'red';
    } else {
        motherNameError.style.display = 'none';
        motherNameElement.style.background = '';
    }
    
    var idCardNumberElement = document.getElementById("idCardNumber");
    var idCardNumberError = document.getElementById("idCardNumberError");
    if (idCardNumberElement.value === "" || idCardNumberElement.value.length !== 8) {
        idCardNumberError.style.display = 'block';
        idCardNumberElement.style.background = 'red';
    } else {
        idCardNumberError.style.display = 'none';
        idCardNumberElement.style.background = '';
    }
    
    var jobDescriptionElement = document.getElementById("jobDescription");
    var jobDescriptionError = document.getElementById("jobDescriptionError");
    if (jobDescriptionElement.value === "" || jobDescriptionElement.value.length < 200) {
        jobDescriptionError.style.display = 'block';
        jobDescriptionElement.style.background = 'red';
    } else {
        jobDescriptionError.style.display = 'none';
        jobDescriptionElement.style.background = '';
    }
    
    var addressNumberElement = document.getElementById("addressNumber");
    var addressNumberError = document.getElementById("addressNumberError");
    if (addressNumberElement.value === "" || addressNumberElement.value.length !== 4) {
        addressNumberError.style.display = 'block';
        addressNumberElement.style.background = 'red';
    } else {
        addressNumberError.style.display = 'none';
        addressNumberElement.style.background = '';
    }
    
    var addressCityElement = document.getElementById("addressCity");
    var addressCityError = document.getElementById("addressCityError");
    if (addressCityElement.value === "" || addressCityElement.value.length < 2) {
        addressCityError.style.display = 'block';
        addressCityElement.style.background = 'red';
    } else {
        addressCityError.style.display = 'none';
        addressCityElement.style.background = '';
    }

    var addressStreetElement = document.getElementById("addressStreet");
    var addressStreetError = document.getElementById("addressStreetError");
    if (addressStreetElement.value === "" || addressStreetElement.value.length < 2) {
        addressStreetError.style.display = 'block';
        addressStreetElement.style.background = 'red';
    } else {
        addressStreetError.style.display = 'none';
        addressStreetElement.style.background = '';
    }

    var addressHousenumberElement = document.getElementById("addressHousenumber");
    var addressHousenumberError = document.getElementById("addressStreetError");
    if (addressHousenumberElement.value === NaN || addressHousenumberElement.value.length < 1) {
        addressHousenumberError.style.display = 'block';
        addressHousenumberElement.style.background = 'red';
    } else {
        addressHousenumberError.style.display = 'none';
        addressHousenumberElement.style.background = '';
    }

}
