import { containerFormSingIn, containerFormSingUp, linkSingIn } from "@/constans";

const FunctionlinkSingIn = (): void => { 
    linkSingIn.addEventListener('click', event => {
        event.preventDefault();
    
        containerFormSingIn?.classList.remove('hidden');
        containerFormSingUp?.classList.add('hidden');
        containerFormSingIn?.classList.add('animate__animated', 'animate__flipInY');
    })
}

export default FunctionlinkSingIn;