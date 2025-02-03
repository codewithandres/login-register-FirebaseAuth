import type { DataForm , validateResult } from '@/interface/index.interface';
import { validateName } from '../validateNames';
import { validatePassword } from '../validatePassword';
import { validateEmail } from '../validatyeEmail';

interface InputPros {
    names: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
    RepeatPassword: HTMLInputElement;
}
export const validateForSingUp = ({
    names,
    email,
    password,
    RepeatPassword,
}: InputPros): validateResult  => {
    if (!validateName(names)) {
        return { success: false, error: 'Ingresa un nombre válido' };
    }

    if (!validateEmail(email)) {
        return { success: false, error: 'Ingresa un email válido' };
    }

    if (!validatePassword(password)) {
        return { success: false, error: 'Ingresa una contraseña válida' };
    }

    if (password.value !== RepeatPassword.value) {
        return { success: false, error: 'Las contraseñas no coinciden' };
    }

    const data = {
        name: names.value,
        email: email.value,
        password: password.value,
    } satisfies DataForm;

    return { success: true, data };
};
