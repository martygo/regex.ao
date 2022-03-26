function removeAccents(value: string) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function removeNumber(value: string) {
    return value.replace(/[0-9]/g, "");
}

function allowNumber(value: string) {
    return /^[0-9]*$/.test(value);
}

function isURL(value: string) {
    const regex =
        /^(?:https?):\/\/(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    return regex.test(value);
}

function emailValidator(email: string) {
    const regex = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/

    return regex.test(email);
}

export { removeAccents, emailValidator, isURL, allowNumber, removeNumber };