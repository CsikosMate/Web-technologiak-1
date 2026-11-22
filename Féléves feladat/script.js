$(document).ready(function() {
    $('#foglalas-form').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        $('.hiba-uzenet').remove(); 
        $('input, textarea').css('border', '2px solid #bdc3c7');

        let nevInput = $('#nev');
        if(nevInput.val().trim() === "") {
            isValid = false;
            nevInput.css('border', '2px solid red');
            nevInput.after('<span class="hiba-uzenet text-danger fw-bold"><br>A név megadása kötelező!</span>');
        }

        let datumInput = $('#datum-kezdet');
        if(datumInput.val() === "") {
            isValid = false;
            datumInput.css('border', '2px solid red');
            datumInput.after('<span class="hiba-uzenet text-danger fw-bold"><br>Válasszon kezdődátumot!</span>');
        }
        let datumVegeInput = $('#datum-vege');
        if(datumVegeInput.val() === "" || datumInput.val() > datumVegeInput.val()) {
            isValid = false;
            datumVegeInput.css('border', '2px solid red');
            datumVegeInput.after('<span class="hiba-uzenet text-danger fw-bold"><br>Válasszon végedátumot!</span>');
        }

        if(isValid) {

            let extrak = [];
            if($('#gps').is(':checked')) extrak.push('GPS');
            if($('#vonohorog').is(':checked')) extrak.push('Vonóhorog');

            let foglalasAdatok = {
                nev: nevInput.val().trim(),
                berlesKezdete: datumInput.val(),
                berlesVege: datumVegeInput.val(),
                autoSzin: $('#auto-szin').val(),
                biztositas: $('input[name="biztositas"]:checked').val(),
                extrak: extrak,
                megjegyzes: $('#megjegyzes').val().trim()
            };

            let jsonAdat = JSON.stringify(foglalasAdatok);
            console.log("Foglalas JSON:");
            console.log(jsonAdat);

            $('#form-cim').text("Sikeres foglalás!");
            
            $(this).fadeOut(1000, function() {
                let sikeresUzenet = $('<div class="alert alert-success mt-3" style="display:none;"><h2>Köszönjük a foglalást!</h2><p>Hamarosan felvesszük Önnel a kapcsolatot.</p></div>');
                $('#urlap-tarolo').append(sikeresUzenet);
                sikeresUzenet.slideDown(1000);
            });
        }
    });
});