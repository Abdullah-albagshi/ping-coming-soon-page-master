function validate() {
    let email = document.getElementById('email');
    let err = document.querySelector('.error');
    let errP = document.querySelector('.errorP');
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let validate = re.test(String(email.value).toLowerCase());
    if (!validate) {
        err.style.display = "block";
        email.style.borderColor = "hsl(354, 100%, 66%)";
    } else {
        err.style.display = "none";
        email.style.borderColor = "hsl(223, 100%, 88%)";
    }

}