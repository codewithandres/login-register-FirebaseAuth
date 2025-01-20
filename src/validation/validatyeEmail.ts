

const validateEmail = (inputEmail: HTMLInputElement): boolean => {
    // some code
    const expRegEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (expRegEmail.test(inputEmail.value.trim())) {
        inputEmail.closest('.form-group')?.classList.remove('error');
        return true;
    } else {
        inputEmail.closest('.form-group')?.classList.add('error');
        throw new Error('El correo es Incorrecto')
    }
}

export {
    validateEmail
}