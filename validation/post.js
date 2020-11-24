const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validatePostInput = data => {
    let errors = {};

    let { title, body } = data;
    //comvert empty fields to empty string
    title = !isEmpty(title) ? title : "";
    body = !isEmpty(body) ? body : "";

    if(Validator.isEmpty(title)){
        errors.title = "Naslov je obavezno polje";
    }

    if (Validator.isEmpty(body)){
        errors.body = "Tekst je obavezno polje";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};  