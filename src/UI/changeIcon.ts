import { iconEye } from '@/constans';

export const changeIconEye = (): void => {
    for (const elemet of iconEye) {
        elemet.addEventListener('click', event => {
            const target = event.target as HTMLElement;
            const input = target.previousElementSibling as HTMLInputElement;

            if (input.type === 'password') {
                input.type = 'text';
                target.classList.remove('ri-eye-off-fill');
                target.classList.add('ri-eye-fill');
            } else {
                input.type = 'password';
                target.classList.remove('ri-eye-fill');
                target.classList.add('ri-eye-off-fill');
            }
        });
    }
};
