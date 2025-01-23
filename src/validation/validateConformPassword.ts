
interface ValidateConformPasswordParams {
    inputConfirmPassowrd: HTMLInputElement;
    inputPassowrd: HTMLInputElement;
}

const validateConformPassword = ({ inputConfirmPassowrd, inputPassowrd }: ValidateConformPasswordParams) => {
    console.log(inputConfirmPassowrd.value, inputPassowrd.value)

    if (inputConfirmPassowrd.value.trim() !== inputPassowrd.value.trim()) {

        inputConfirmPassowrd.closest('.form-group')?.classList.add('error');
        return true;
    } else {
        inputConfirmPassowrd.closest('.form-group')?.classList.remove('error');
        return false;
    }
}

export {
    validateConformPassword
}