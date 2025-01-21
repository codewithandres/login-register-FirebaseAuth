

const validatePassword = (inputPassword: HTMLInputElement) => {
    const expRegPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (expRegPassword.test(inputPassword.value.trim())) {
        inputPassword.closest('.form-group')?.classList.remove('error');
        return true;
    } else {
        inputPassword.closest('.form-group')?.classList.add('error');
        return false;
    }
}

export {
    validatePassword
}