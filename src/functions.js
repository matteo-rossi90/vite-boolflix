//ELENCO FUNZIONI//

//funzione che effettua la conversione del codice della lingua
export function getFlagCode(language) {

    // stabilire un elenco dei codici di alcune lingue originali disponibili nelle API e
    //associarle ai codici di bandiere disponibili nella libreria flag-icon
    const languageToFlag = {

        da: 'dk',
        de: 'de',
        el: 'gr',
        en: 'us',
        es: 'es',
        et: 'ee',
        fa: 'ir',
        fi: 'fi',
        fr: 'fr',
        gu: 'in',
        ja: 'jp',
        it: 'it',
        kn: 'in',
        ko: 'kr',
        no: 'no',
        pl: 'pl',
        pt: 'pt',
        ro: 'ro',
        zh: 'cn'
        

    };

    // Restituire un oggetto con il codice della bandiera e un valore booleano
    if (languageToFlag[language]) {//se una lingua risulta nell'elenco dei codici associati alla bandiera
        return {
            flag: `fi fi-${languageToFlag[language]}`, //aggiungere una classe con la lingua rappresentata con la bandiera del proprio paese
            hasFlag: true //la bandiera è disponibile per quella lingua
        };
    } else {
        return {
            flag: language, //se la lingua non ha una bandiera, aggiungere direttamente il codice della lingua come presentato nell'API
            hasFlag: false //la bandiera non è disponibile
        };
    }

}

//funzione che converte una scala numerica di 10 numeri a un massimo di 5 numeri
export function convertToFiveScale(value) {
    return Math.round((value - 1) / 2);
}

// funzione che genera il markup per il rating delle stelle
export function starRating(value) {
    const stars = Math.round(value);
    const fullStars = stars; // ottenere le stelle piene in base ai numeri inseriti
    const emptyStars = 5 - fullStars; //ricavare le stelle vuote in base alle stelle piene disponibili
    let starMarkup = '';

    for (let i = 0; i < fullStars; i++) {//aggiungere la quantità di stelle piene prese dalla libreria Fontawesome in base al numero totale delle stelle piene
        starMarkup += '<i class="fa-solid fa-star"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {//aggiungere la quantità stelle vuote prese dalla libreria Fontawesome in base al numero totale delle stelle vuote
        starMarkup += '<i class="fa-regular fa-star"></i>';
    }

    return starMarkup;
}