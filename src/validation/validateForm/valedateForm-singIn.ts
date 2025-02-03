import type { DataFormSingUp, validateResult } from '@/interface/index.interface';
import { validatePassword } from '../validatePassword';
import { validateEmail } from '../validatyeEmail';


interface Inputprops {
    email: HTMLInputElement;
    password: HTMLInputElement;
}

export const validateFormSingIn = ({ email, password }: Inputprops): validateResult => {
    if (!validateEmail(email)) {
        return { success: false, error: 'Ingresa un email válido' };
    }

    if (!validatePassword(password)) {
        return { success: false, error: 'Ingresa una contraseña válida' };
    }

    const data: DataFormSingUp  = { 
        email: email.value,
        password: email.value
    }

    return { success: true, data};
};