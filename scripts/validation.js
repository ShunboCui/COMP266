//This is the file for the script that validates the input from the contact me page.

//Add the method to check the email address in the input text, based on the regular expression.
jQuery.validator.addMethod("email", function (value, element) {
    return this.optional(element) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
}, "Please enter a valid email address.");

var contactForm = $('.contact-form');

//Checks every entry in the contact form if matching the rules
if (contactForm.length) {
    contactForm.validate({
        rules: {
            name: {
                required: true
            },
            contact: {
                required: true,
                email: true
            },
            title: {
                required: true
            },
            message: {
                required: true
            }
        },

        //Defines the message to display when the input is not valid.
        messages: {
            name: {
                required: 'Please enter your name.'
            },
            contact: {
                required: 'Please enter your email address.',
                email: 'Please make sure the email address is valid.'
            },
            title: {
                required: 'Please enter the title.'
            },
            message: {
                required: 'Please enter the message you wish to send to me.'
            }
        },
        errorPlacement: function (error, element) {
            error.insertAfter(element);
        }
    });
}

// References:
//  https://bushansirgur.in/jquery-validation-example/
//  https://cdn.jsdelivr.net/npm/jquery-validation@1.17.0/dist/jquery.validate.js
//  https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
