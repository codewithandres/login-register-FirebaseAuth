
const validateName = ( inputName: HTMLInputElement ) => {

    const expRegName = /^[a-zA-Z]{2,}$/;

    if ( expRegName.test( inputName.value.trim() ) ) {
        inputName.closest('.form-group')?.classList.remove('error');
        return true;
    } else {
        inputName.closest('.form-group')?.classList.add('error');
        return false;
    }
}

export { 
    validateName
}