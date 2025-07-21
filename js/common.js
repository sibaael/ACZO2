function showError(message){
    const errorElement = document.getElementById('errorDescription');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideAlerts(){
    const errorElement = document.getElementById('errorDescription');
    errorElement.textContent = '';
    errorElement.style.display = 'none';
    const successElement = document.getElementById('succesDescription');
    successElement.textContent = '';
    successElement.style.display = 'none';
}

function showSuccess(message){
    const successElement = document.getElementById('succesDescription');
    successElement.textContent = message;
    successElement.style.display = 'block';
    successElement.focus({preventScroll:true});
}

function validateEmail(email, max){
    if (email === ''){
        return false;
    }

    if(email.length>max){
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    if (phoneNumber === ''){
        return false;
    }

    const internationalPhoneRegex = /^\+?[0-9]{1,4}?[-\s.]?(\(?[0-9]{1,5}\)?)?[-\s.]?[0-9]{1,5}[-\s.]?[0-9]{1,9}$/;

    // Example: Regex for a 10-digit phone number
    //const phonePattern = /^\d{10}$/; 

    if (internationalPhoneRegex.test(phoneNumber)) {
        return true; // Phone number is valid
    } else {
        return false; // Phone number is invalid
    }
}

function validateDocumentNumber(number) {
    if (number === ''){
        return false;
    }

    // Example: Regex for a 8-digit number
    const phonePattern = /^\d{1,8}$/;

    if (phonePattern.test(number)) {
        return true; // number is valid
    } else {
        return false; // number is invalid
    }
}

function validateIsEmptyAndLength(text, min, max){
    if(text === '' || text.length < min || text.length > max){
        return false;
    }
    else{
        return true;
    }
}

function validateLength(text, min, max){
    if(text.length == 0){
        return true;
    }

    if(text.length < min || text.length > max){
        return false;
    }
    else{
        return true;
    }
}

function validateAge(birthDateValue) {
    if (!birthDateValue) {
        return false; // Prevent form submission
    }

    const birthDate = new Date(birthDateValue);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const minimumAge = 18; // Set your desired minimum age here

    if (age < minimumAge) {
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}
