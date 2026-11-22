function sendForm() {
    var nameElement = document.getElementById("name")
    var nameError = document.getElementById("nameError")
    if (nameElement.value === "" || nameElement.value.length < 10) {
        nameError.style.display='block'
        nameElement.style.border = '2px solid red';
    } else {
        nameError.style.display='none'
        nameElement.style.border = '';
    }
    
    var ageElement = document.getElementById("age");
    var ageError = document.getElementById("ageError");
    if (ageElement.value === "" || ageElement.value < 0 || ageElement.value > 120) {
        ageError.style.display = 'block';
        ageElement.style.border = '2px solid red';
    } else {
        ageError.style.display = 'none';
        ageElement.style.border = '';
    }

    var workElement = document.getElementById("work");
    var workError = document.getElementById("workError");
    if (workElement.value === "" || workElement.value.length < 5) {
        workError.style.display = 'block';
        workElement.style.border = '2px solid red';
    } else {
        workError.style.display = 'none';
        workElement.style.border = '';
    }

    var saleryElement = document.getElementById("salery");
    var saleryError = document.getElementById("saleryError");
    if (saleryElement.value === "" || saleryElement.value < 200) {
        saleryError.style.display = 'block';
        saleryElement.style.border = '2px solid red';
    } else {
        saleryError.style.display = 'none';
        saleryElement.style.border = '';
    }

    var jobDescriptionElement = document.getElementById("jobDescription");
    var jobDescriptionError = document.getElementById("jobDescriptionError");
    if (jobDescriptionElement.value === "" || jobDescriptionElement.value.length < 200) {
        jobDescriptionError.style.display = 'block';
        jobDescriptionElement.style.border = '2px solid red';
    } else {
        jobDescriptionError.style.display = 'none';
        jobDescriptionElement.style.border = '';
    }

}
