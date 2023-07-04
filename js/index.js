function validateForm() {
    const errors = [];
    const data = {};

    const fullName = document.getElementById("firstandlastname");
    const email = document.getElementById("email01");
    const message = document.getElementById("message01");



    // Validation for full name---------------------------------------------------------------------------
    if (firstandlastname.value !== "") {
        data.firstandlastname = firstandlastname.value;
    } else {
        errors.push("Full Name is required");
    }




    // Validation for email---------------------------------------------------------------------------
    if (email01.value !== "") {
        var emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailcheck.test(email01.value)) {
            data.email01 = email01.value;
        } else {
            errors.push("Invalid Email");
        }
    } else {
        errors.push("Email is required");
    }


    // Validation for Message---------------------------------------------------------------------------


    if (message01.value !== "") {
        data.message01 = message01.value;
    } else {
        errors.push("Message is required");
    }

    if (errors.length > 0) {
        console.log("Errors:", errors);
    } else {
        console.log("Data:", data);
        firstandlastname.value = "";
        email01.value = "";
        message01.value = "";
    }
}

document.getElementById("submit-button").addEventListener("click", function () {
    validateForm();
});
