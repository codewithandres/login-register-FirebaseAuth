

import { validateEmail } from "@/validation/validatyeEmail";
import { validatePassword } from "@/validation/validatePassword";


import FunctionlinkSinUp from "./handlers/linkSingUp";
import FunctionlinkSingIn from "./handlers/linkSingIn";

import { formsingIn, iconEye } from "./constans";

const bottonFormSignIn = document.getElementById('botton-signIn');


formsingIn?.addEventListener('keyup', event => {
    if (!event.target || (event.target as HTMLElement).tagName !== 'INPUT') return;


    const target = event.target as HTMLInputElement

    if (target.tagName !== 'INPUT') return;

    if (target.id === 'email') return validateEmail(target);

    if (target.id === 'password') return validatePassword(target)
})

bottonFormSignIn?.addEventListener('click', event => {
    event.preventDefault();

    const { email, password } = formsingIn;


    if (!validateEmail(email)) {

        console.log('Infresa un email valido')
    };


    if (!validatePassword(password)) {

        console.log('Igresa una contraseña valida');
    }

    console.log(email.value, password.value);
})

FunctionlinkSinUp();

FunctionlinkSingIn()

iconEye.forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.previousElementSibling as HTMLInputElement;
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('ri-eye-off-fill');
            icon.classList.add('ri-eye-fill');
        } else {
            input.type = 'password';
            icon.classList.remove('ri-eye-fill');
            icon.classList.add('ri-eye-off-fill');
        }
    })
})
