import { containerFormSingIn, containerFormSingUp, linkSingUp } from "@/constans";

const FunctionlinkSinUp = ( ) => { 
    linkSingUp.addEventListener('click', event => {
        event.preventDefault();

        containerFormSingIn?.classList.add('hidden');
        containerFormSingUp?.classList.remove('hidden');
        containerFormSingUp?.classList.add('animate__animated', 'animate__flipInY');

    })
}

export default FunctionlinkSinUp;
