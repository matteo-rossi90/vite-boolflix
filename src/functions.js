//ELENCO FUNZIONI//

//funzione che effettua la conversione del codice della lingua
export function getFlagCode(language) {

    // stabilire un elenco di abbreviazioni di lingue a cui corrisponde una bandiera
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
        it: 'it',
        kn: 'in',
        ko: 'kr',
        no: 'no',
        pl: 'pl',
        pt: 'pt',
        ro: 'ro',
        zh: 'cn'

    };

    return languageToFlag[language] || language;
}

//funzione che converte una scala numerica di 10 numeri a un massimo di 5 numeri
export function convertToFiveScale(value) {
    return Math.round((value - 1) / 2) + 1;
}

// funzione che genera il markup per il rating delle stelle
export function starRating(value) {
    const stars = Math.round(value);
    const fullStars = stars; // tutte le stelle sono piene se il valore è arrotondato
    const emptyStars = 5 - fullStars;
    let starMarkup = '';

    for (let i = 0; i < fullStars; i++) {
        starMarkup += '<i class="fa-solid fa-star"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        starMarkup += '<i class="fa-regular fa-star"></i>';
    }

    return starMarkup;
}