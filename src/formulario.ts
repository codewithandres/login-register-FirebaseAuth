
import { formsingIn } from "@/constans";
import { validateEmail } from "@/validation/validatyeEmail";
import { validatePassword } from "@/validation/validatePassword";

const bottonFormSignIn = document.getElementById('botton-signIn')

formsingIn.addEventListener('keyup', (event: KeyboardEvent) => {

    const target = event.target as HTMLInputElement


    if (target.tagName !== 'INPUT') return;

    if (target.id === 'email') return validateEmail(target);

    if (target.id === 'password') return validatePassword(target)
})

bottonFormSignIn?.addEventListener('click', event => {
    event.preventDefault();

    if (validateEmail(formsingIn.email)) {
        const errorMessage = validateEmail(formsingIn.email);
        console.log(errorMessage)
    };


    if (validatePassword(formsingIn.password)) {
        const errorMessage = validatePassword(formsingIn.password);
        console.log(errorMessage)
    }
    const { email, password } = formsingIn;

    console.log(email.value, password.value);
})