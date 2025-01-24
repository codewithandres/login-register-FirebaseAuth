import { formsingUp } from "@/constans";
import { validateName } from "./validation/validateNames";
import { validateEmail } from "./validation/validatyeEmail";
import { validatePassword } from "./validation/validatePassword";
import { validateConformPassword } from "./validation/validateConformPassword";


const bottonFormSingUp = document.querySelector('.botton-signUp') as HTMLButtonElement;

formsingUp.addEventListener('keyup', (event: KeyboardEvent) => {
    if (!event.target || (event.target as HTMLElement).tagName !== 'INPUT') return;


    const target = event.target as HTMLInputElement;

    if (target.name === 'names') return validateName(target);

    if (target.name === 'email') return validateEmail(target);

    if (target.name === 'password') return validatePassword(target);

    if (target.name === 'RepeatPassword') return validateConformPassword({ inputConfirmPassowrd: target, inputPassowrd: formsingUp.password });


})


bottonFormSingUp.addEventListener('click', event => {
    event.preventDefault();

    const { names, email, password, RepeatPassword } = formsingUp;


    if (!validateName(names)) {
        console.log('error en el nombre');
    }

    if (!validateEmail(email)) {
        console.log('email invalido');
    }

    if (!validatePassword(password)) {
        console.log('password invalido');
    }

    if (!validateConformPassword({ inputConfirmPassowrd: RepeatPassword, inputPassowrd: password })) {
        console.log('password no coinciden');
    }
})