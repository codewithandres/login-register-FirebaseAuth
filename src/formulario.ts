import { validateEmail } from '@/validation/validatyeEmail';
import { validatePassword } from '@/validation/validatePassword';

import FunctionlinkSinUp from './handlers/linkSingUp';
import FunctionlinkSingIn from './handlers/linkSingIn';

import { formsingIn } from './constans';
import { validateFormSingIn } from './validation/validateForm/valedateForm-singIn';
import { changeIconEye } from './UI/changeIcon';

const bottonFormSignIn = document.getElementById('botton-signIn');

formsingIn?.addEventListener('keyup', event => {
    if (!event.target || (event.target as HTMLElement).tagName !== 'INPUT') return;

    const target = event.target as HTMLInputElement;

    if (target.tagName !== 'INPUT') return;

    if (target.id === 'email') return validateEmail(target);

    if (target.id === 'password') return validatePassword(target);
});

bottonFormSignIn?.addEventListener('click', (event: Event) => {
    event.preventDefault();

    const { email, password } = formsingIn;

    const { success, error } = validateFormSingIn({ email, password });

    //? mostrar los errores en la ui
    if (error) return console.log(error);

    // enviar la data al servidor
    if (success) return console.log(email.value, password.value);
});

FunctionlinkSinUp();

FunctionlinkSingIn();

changeIconEye();
