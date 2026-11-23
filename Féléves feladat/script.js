$(document).ready(function() {
    $('#reservation-form').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        $('.error-message').remove(); 
        $('input, textarea').css('border', '2px solid #bdc3c7');

        let nameInput = $('#name');
        if(nameInput.val().trim() === "") {
            isValid = false;
            nameInput.css('border', '2px solid red');
            nameInput.after('<span class="error-message text-danger fw-bold"><br>A név megadása kötelező!</span>');
        }

        let dateInput = $('#start-date');
        if(dateInput.val() === "") {
            isValid = false;
            dateInput.css('border', '2px solid red');
            dateInput.after('<span class="error-message text-danger fw-bold"><br>Válasszon kezdődátumot!</span>');
        }
        let dateEndInput = $('#end-date');
        if(dateEndInput.val() === "" || dateInput.val() > dateEndInput.val()) {
            isValid = false;
            dateEndInput.css('border', '2px solid red');
            dateEndInput.after('<span class="error-message text-danger fw-bold"><br>Válasszon végedátumot!</span>');
        }

        if(isValid) {

            let extras = [];
            if($('#gps').is(':checked')) extras.push('GPS');
            if($('#tow-bar').is(':checked')) extras.push('Vonóhorog');

            let reservationDatas = {
                name: nameInput.val().trim(),
                reservationStart: dateInput.val(),
                reservationEnd: dateEndInput.val(),
                carColor: $('#car-color').val(),
                insurance: $('input[name="insurance"]:checked').val(),
                extras: extras,
                comment: $('#comment').val().trim()
            };

            let jsonData = JSON.stringify(reservationDatas);
            console.log(jsonData);

            $('#form-title').text("Sikeres foglalás!");
            
            $(this).fadeOut(1000, function() {
                let successMessage = $('<div class="alert alert-success mt-3" style="display:none;"><h2>Köszönjük a foglalást!</h2><p>Hamarosan felvesszük Önnel a kapcsolatot.</p></div>');
                $('#form-container').append(successMessage);
                successMessage.slideDown(1000);
            });
        }
    });
});