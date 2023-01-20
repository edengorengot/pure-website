/* main form validation */

// get the elements from the document
var textBoxName = document.getElementById ("textBoxName");
var textBoxLastName = document.getElementById ('textBoxLastName');
var textBoxEmail = document.getElementById ("textBoxEmail");
var textBoxText = document.getElementById ('textBoxText');
var sendButton = document.getElementById ("sendButton");

var errName = document.getElementById ("errName");
var errLastName = document.getElementById ("errLastName");
var errEmail = document.getElementById ("errEmail");
var errText = document.getElementById ("errText");
var formSuccessMessage = document.getElementById ('formSuccessMessage');



sendButton.addEventListener ("click", formChecker);

function formChecker () {
    var user_name = textBoxName.value;
    var user_last_name = textBoxLastName.value;
    var user_email = textBoxEmail.value;
    var user_text = textBoxText.value;
    
    // first name field
    if (user_name === '' ) {
        errName.innerText = "You must fill your first name";
    } else {
        errName.innerText = "";
    }

    // last name field
    if (user_last_name === '' ) {
        errLastName.innerText = "You must fill your last name";
    } else {
        errLastName.innerText = "";
    }

    // email field
    if ( user_email === '' ) {
        errEmail.innerText = "You must fill email field";
    } else {
        errEmail.innerText = "";
    }
    
    if ( user_email.indexOf('@') === -1 || user_email.indexOf('.') === -1 ) {
        errEmail.innerText = "Email is not valid";
    } else {
        errEmail.innerText = '';
    }

    // message field
    if ( user_text === '' ) {
        errText.innerText = 'You don\'t have any questions?';
    } else {
        errText.innerText = '';
    }

    // Success Message
    if ( user_name !== '' && user_last_name !== '' && user_text !== '' && user_email !== '' && user_email.indexOf('@') >= 0 && user_email.indexOf('.') >= 0 ) {
        formSuccessMessage.innerText = 'Thank you for getting in touch!';
    } else {
        formSuccessMessage.innerText = '';
    }
}