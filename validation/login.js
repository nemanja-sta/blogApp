const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateLoginInput = data => {
    let errors = {};

    let { email, password } = data;
    // convert empty fields to empty strings as validator function works only with strings
    email = !isEmpty(email) ? email : "";
    password = !isEmpty(password) ? password : "";

    if (Validator.isEmpty(email)){
        errors.email = "Email je obavezan";
    } else if (!Validator.isEmail(email)) {
        errors.email = "Unesite validan email";
    }

    if (Validator.isEmpty(password)){
        errors.password = "Šifra je obavezna";
    } else if (!Validator.isLength(password, { min: 6, max: 30})){
        errors.password = "Šifra mora da ima minimum 6 karaktera";
    }

    return {
        errors, 
        isValid: isEmpty(errors)
    };
};  