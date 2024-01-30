function Validation(values){
    let error = {}
    const email_patterns = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // const password_patterns = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    if(values.name === "") {
        error.name = "Name should not be empty"
    }

    else {
        error.name = ""
    }

    if(values.email === "") {
        error.email="Email should not be empty"
    }

    else if (!email_patterns.test(values.email)) {
        error.email = "Email did not match"
    }
    else {
        error.email = ""
    }

    if(values.password === "") {
        error.password="Password should not be empty"
    }
    // else if (!password_patterns.test(values.password)) {
    //     error.password = "Password did not match"
    // }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;