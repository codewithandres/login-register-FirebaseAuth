import { formsingUp } from '@/constans';
import { validateName } from './validation/validateNames';
import { validateEmail } from './validation/validatyeEmail';
import { validatePassword } from './validation/validatePassword';
import { validateConformPassword } from './validation/validateConformPassword';
import { validateForSingUp } from './validation/validateForm/validateForm-singUp';
import type { FormInputs } from './interface/index.interface';

const bottonFormSingUp = document.querySelector(
    '.botton-signUp'
) as HTMLButtonElement;

formsingUp.addEventListener('keyup', (event: KeyboardEvent) => {
    if (!event.target || (event.target as HTMLElement).tagName !== 'INPUT') return;

    const target = event.target as HTMLInputElement;

    if (target.name === 'names') return validateName(target);

    if (target.name === 'email') return validateEmail(target);

    if (target.name === 'password') return validatePassword(target);

    if (target.name === 'RepeatPassword')
        return validateConformPassword({
            inputConfirmPassowrd: target,
            inputPassowrd: formsingUp.password,
        });
});


const handleFormSubmit = async (event: Event): Promise<void> => {
    event.preventDefault();

    try {
        const formData: FormInputs = {
            names: formsingUp.names,
            email: formsingUp.email,
            password: formsingUp.password,
            RepeatPassword: formsingUp.RepeatPassword,
        };

        const { success, data, error} = validateForSingUp(formData)
    
        
    if (error) return console.log(error);

    console.log(data);

    if (success) return alert('Formulario enviado');
   
} catch (error) {
        console.log(error);
    }
};

bottonFormSingUp.addEventListener('click', handleFormSubmit);
