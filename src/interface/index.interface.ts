export interface validateResult {
    success: boolean;
    error?: string;
    data?: DataForm
}

export interface DataForm { 
    name?: string;
    email: string;
    password: string;
    confirmPassword?: string;
}
export interface FormInputs {
    names: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
    RepeatPassword: HTMLInputElement;
}

export type DataFormSingUp = Omit<DataForm, 'name' | 'confirmPassword'> 