
import { formsingIn } from "@/constans";
import { validateEmail } from "@/validation/validatyeEmail";
import { validatePassword } from "@/validation/validatePassword";

const bottonFormSignIn = document.getElementById('botton-signIn');
const containerFormSingUp = document.querySelector('.container-form-register');
const containerFormSingIn = document.querySelector('.container-form-login');

const linkSingUp = document.querySelector('.form-link a.singUp') as HTMLAnchorElement;
const linkSingIn = document.querySelector('.form-link a.singIn') as HTMLAnchorElement;

formsingIn.addEventListener('keyup', (event: KeyboardEvent) => {
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
    } ;


    if (!validatePassword(password)) {
       
        console.log('Igresa una contraseña valida'); 
    }

    console.log(email.value, password.value);
})

linkSingUp.addEventListener('click', event => {
    event.preventDefault();

    containerFormSingIn?.classList.add('hidden');
    containerFormSingUp?.classList.remove('hidden');
    containerFormSingUp?.classList.add('animate__animated', 'animate__flipInY');

})

linkSingIn.addEventListener('click', event => {
    event.preventDefault();

    containerFormSingIn?.classList.remove('hidden');
    containerFormSingUp?.classList.add('hidden');
    containerFormSingIn?.classList.add('animate__animated', 'animate__flipInY');
})

document.querySelectorAll('.ri-eye-off-fill').forEach(icon => { 
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
