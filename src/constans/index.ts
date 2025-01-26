
const formsingIn = document.getElementById('form-sigIn') as HTMLFormElement;

const formsingUp = document.getElementById('form-sigUp') as HTMLFormElement;

const linkSingUp = document.querySelector('.form-link a.singUp') as HTMLAnchorElement;
const linkSingIn = document.querySelector('.form-link a.singIn') as HTMLAnchorElement;

const containerFormSingUp = document.querySelector('.container-form-register');
const containerFormSingIn = document.querySelector('.container-form-login');

const iconEye = document.querySelectorAll('.ri-eye-off-fill') as NodeListOf<HTMLElement>;

export {
    formsingIn,
    formsingUp,


    linkSingIn,
    linkSingUp,
    containerFormSingIn,
    containerFormSingUp,

    
    iconEye
}