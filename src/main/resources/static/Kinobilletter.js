//  Lager ett array for å lagre billetter i
var billetter = [];

//  Kjøpe billett funksjon
function kjøpBillett() {
    //  Henter fra HTML
    var filmInput = document.getElementById('film');
    var antallInput = document.getElementById('antall');
    var fornavnInput = document.getElementById('fornavn');
    var etternavnInput = document.getElementById('etternavn');
    var telefonInput = document.getElementById('telefon');
    var epostInput = document.getElementById('epost');

    //  Verdier fra input
    var film = filmInput.value;
    var antall = antallInput.value;
    var fornavn = fornavnInput.value;
    var etternavn = etternavnInput.value;
    var telefon = telefonInput.value;
    var epost = epostInput.value;

    //  Validere filmvalg
    function validerFilm(film) {
        var feilMelding = document.getElementById('filmFeil');
        if (film === '') {
            feilMelding.textContent = 'Vennligst velg en film';
            return false;
        } else {
            feilMelding.textContent = '';
            return true;
        }
    }

    //  Validere antall
    function validerAntall(antall) {
        var feilMelding = document.getElementById('antallFeil');
        if (!/^\d+$/.test(antall) || parseInt(antall) <= 0) {
            feilMelding.textContent = 'Vennligst skriv inn et gyldig antall';
            return false;
        } else {
            feilMelding.textContent = '';
            return true;
        }
    }

    //  Validere navn
    function validerNavn(navn, inputElementId) {
        var feilMelding = document.getElementById(inputElementId + 'Feil');
        if (!/^[A-Åa-å\s]+$/.test(navn)) {
            feilMelding.textContent = 'Vennligst skriv inn et gyldig navn';
            return false;
        } else {
            feilMelding.textContent = '';
            return true;
        }
    }

    //  Validere telefonnummer
    function validerTelefon(telefon) {
        var feilMelding = document.getElementById('telefonFeil');
        if (!/^\d{8}$/.test(telefon)) {
            feilMelding.textContent = 'Vennligst skriv inn et gyldig telefonnummer';
            return false;
        } else {
            feilMelding.textContent = '';
            return true;
        }
    }

    //  Validere e-postadresse
    function validerEpost(epost) {
        var feilMelding = document.getElementById('epostFeil');
        if (!/\S+@\S+\.\S+/.test(epost)) {
            feilMelding.textContent = 'Vennligst skriv inn en gyldig e-postadresse';
            return false;
        } else {
            feilMelding.textContent = '';
            return true;
        }
    }

    //  Validerer input
    var gyldigFilm = validerFilm(film);
    var gyldigAntall = validerAntall(antall);
    var gyldigFornavn = validerNavn(fornavn, 'fornavn');
    var gyldigEtternavn = validerNavn(etternavn, 'etternavn');
    var gyldigTelefon = validerTelefon(telefon);
    var gyldigEpost = validerEpost(epost);

    //  Sjekker om alle felt er gyldig
    if (!gyldigFilm || !gyldigAntall || !gyldigFornavn || !gyldigEtternavn || !gyldigTelefon || !gyldigEpost) {
        return;
    }

    // Legger til billett i arrayet
    var billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };
    billetter.push(billett);

    //  Oppdaterer billettliste
    oppdaterBillettliste();

    //  Tømmer input
    filmInput.value = '';
    antallInput.value = '';
    fornavnInput.value = '';
    etternavnInput.value = '';
    telefonInput.value = '';
    epostInput.value = '';
}

//  Visningen av billettlisten
function oppdaterBillettliste() {
    var billettTableBody = document.querySelector('#billettListe tbody');
    billettTableBody.innerHTML = '';

    //  Legger til i tabellen
    billetter.forEach(billett => {
        var rad = document.createElement('tr');
        Object.values(billett).forEach(egenskap => {
            var data = document.createElement('td');
            data.textContent = egenskap;
            rad.appendChild(data);
        });
        billettTableBody.appendChild(rad);
    });
}

function visBillettListe() {
    var billettliste = document.getElementById("billettListe");
    if (billetter.length > 0) {
        billettliste.style.display = "block"; // Viser billettliste hvis det er biletter
    } else {
        billettliste.style.display = "none"; // Skjuler billettliste hvis det ikke er noen
    }
}


//  Slette alle billetter
function slettAlleBilletter() {
    //  Tømmer arrayet
    billetter = [];
    oppdaterBillettliste();
}