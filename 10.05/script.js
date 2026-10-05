function sendForm() {
    var nameElement = document.getElementById("name")
    var nameError = document.getElementById("nameError")
    if (nameElement.value === "") {
        nameError.style.display='block'
        nameElement.style.border = '2px solid red';
    } else {
        nameError.style.display='none'
        nameElement.style.border = '';
    }

    var addressElement = document.getElementById("address");
    var addressError = document.getElementById("addressError");
    if (addressElement.value === "") {
        addressError.style.display = 'block';
        addressElement.style.border = '2px solid red';
    } else {
        addressError.style.display = 'none';
        addressElement.style.border = '';
    }

    var ageElement = document.getElementById("age");
    var ageError = document.getElementById("ageError");
    if (ageElement.value === "" || ageElement.value < 18 || ageElement.value > 100) {
        ageError.style.display = 'block';
        ageElement.style.border = '2px solid red';
    } else {
        ageError.style.display = 'none';
        ageElement.style.border = '';
    }

    var motherNameElement = document.getElementById("motherName");
    var motherNameError = document.getElementById("motherNameError");
    if (motherNameElement.value === "") {
        motherNameError.style.display = 'block';
        motherNameElement.style.border = '2px solid red';
    } else {
        motherNameError.style.display = 'none';
        motherNameElement.style.border = '';
    }

    var universityElement = document.getElementById("university");
    var universityError = document.getElementById("universityError");
    if (universityElement.value === "") {
        universityError.style.display = 'block';
        universityElement.style.border = '2px solid red';
    } else {
        universityError.style.display = 'none';
        universityElement.style.border = '';
    }

    var facultyElement = document.getElementById("faculty");
    var facultyError = document.getElementById("facultyError");
    if (facultyElement.value === "") {
        facultyError.style.display = 'block';
        facultyElement.style.border = '2px solid red';
    } else {
        facultyError.style.display = 'none';
        facultyElement.style.border = '';
    }

    var degreeProgrammeElement = document.getElementById("degreeProgramme");
    var degreeProgrammeError = document.getElementById("degreeProgrammeError");
    if (degreeProgrammeElement.value === "") {
        degreeProgrammeError.style.display = 'block';
        degreeProgrammeElement.style.border = '2px solid red';
    } else {
        degreeProgrammeError.style.display = 'none';
        degreeProgrammeElement.style.border = '';
    }

    var studentIdElement = document.getElementById("studentIdNumber");
    var studentIdError = document.getElementById("studentIdNumberError");
    if (studentIdElement.value === "" || isNaN(studentIdElement.value) || studentIdElement.value.length != 11) {
        studentIdError.style.display = 'block';
        studentIdElement.style.border = '2px solid red';
    } else {
        studentIdError.style.display = 'none';
        studentIdElement.style.border = '';
    }

    var policyElement = document.getElementById("policy");
    var policyError = document.getElementById("policyError");
    if (policyElement.checked === false) { 
        policyError.style.display = 'block';
    } else {
        policyError.style.display = 'none';
        policyElement.style.outline = '';
    }
}
