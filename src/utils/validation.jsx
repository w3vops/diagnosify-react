export const errorObject = {
    errorName: '',
    errorMessage: '',
};
export const validateEmail = (event, mainEvent, mainName) => {
    let value;
    let name;
    let item;
    if (mainEvent === undefined) {
        value = event.target.value;
        name = event.target.name;
    } else if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === mainName) {
                value = item.value;
                name = mainName;
            }
        }
    }
    const error = `${name}Error`;
    if (isEmpty(value, error, event)) {
        return false;
    } else if (!containsCharacters(value, 5, error, event)) {
        return false;
    }
    return true;
};

export const validatePassword = (event, mainEvent, mainName) => {
    let value;
    let name;
    let item;
    if (mainEvent === undefined) {
        value = event.target.value;
        name = event.target.name;
    } else if (event === undefined) {
        for (item of mainEvent.target) {
            if (item.name === mainName) {
                value = item.value;
                name = mainName;
            }
        }
    }
    const error = `${name}Error`;
    if (isEmpty(value, error, event)) {
        return false;
    }else if (value.length < 7) {
        setInvalid(error, event, 'Password should contain at least be 7 characters')
    } else if (!containsCharacters(value, 2, error, event)) {
        return false;
    }
    else{
        setValid(error, event);
        return true;
    }
};

//UTILS
const isEmpty = (value, error, event) => {
    if (value.trim() === '') {
        setInvalid(error, event, 'Please do not leave empty');
        return true;
    } else {
        setValid(error, event);
        return false;
    }
};

const setValid = (error, event) => {
    const errorIcon = document.querySelector(`.${event.target.name}Error`);
    errorObject.errorName = error;
    errorObject.errorMessage = '';
    event.target.classList.add('set-valid');
    event.target.classList.remove('set-invalid');
    errorIcon.classList.remove('input-error');

};
const setInvalid = (error, event, message) => {
    const errorIcon = document.querySelector(`.${event.target.name}Error`);
    errorObject.errorName = error;
    errorObject.errorMessage = message;
    event.target.classList.remove('set-valid');
    event.target.classList.add('set-invalid');
    errorIcon.classList.add('input-error');
};
const containsCharacters = (value, code, error, event) => {
    let regEx;
    switch (code) {
        case 1:
            //contains letters
            regEx = /(?=.*[a-zA-Z])/;
            return matchWithRegEx(value, regEx, "Must contain at least one letter", error, event);
        case 2:
            // contain letters and numbers
            regEx = /(?=.*[a-zA-Z])(?=.*\d)/;
            return matchWithRegEx(value, regEx, "Must contain at least one letter and one number", error, event);
        case 3:
            //contain lower case, uppercase and numbers
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
            return matchWithRegEx(value, regEx, "Must contain at least one lower case letter, one upper case letter and one number", error, event);
        case 4:
            //contain lowercase, uppercase, numbers and symbols
            regEx = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/;
            return matchWithRegEx(value, regEx, "Must contain at least one lower case letter, one upper case letter, one number and one special character", error, event);
        case 5:
            // for emails
            // eslint-disable-next-line no-useless-escape
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (matchWithRegEx(value, regEx, "Invalid Email", error, event));
        case 6:
            // check if only numbers
            // eslint-disable-next-line no-useless-escape
            regEx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
            return matchWithRegEx(value, regEx, "Please enter a valid phone number", error, event);
        default:
            return false
    }
};

const matchWithRegEx = (value, regEx, message, error, event) => {
    if (value.toLowerCase().match(regEx)) {
        setValid(error, event);
        return true;
    } else {
        setInvalid(error, event, message);
        return false;
    }
};