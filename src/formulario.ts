
import { formsingIn } from "./constans";
import { validateEmail } from "./validation/validatyeEmail";

const bottonFormSignIn = document.getElementById('botton-signIn')

formsingIn.addEventListener('keyup', event => {
    const target = event.target as HTMLInputElement;

    if (target.tagName !== 'INPUT') return;

    if (target.id === 'email') return validateEmail(target)
})

bottonFormSignIn?.addEventListener('click', event => {
    event.preventDefault();

    if (validateEmail(formsingIn.email)) return;

})