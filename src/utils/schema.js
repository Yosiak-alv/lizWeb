import * as Yup from 'yup';

export const ContactSchema = Yup.object({
    email: Yup.string()
        .email('El email no es válido')
        .required('El email es requerido'),
    subject: Yup.string()
        .min(5, 'El asunto debe tener al menos 5 caracteres')
        .max(50, 'El asunto no puede tener más de 50 caracteres')
        .required('El asunto es requerido'),

    message: Yup.string()
        .min(10, 'El mensaje debe tener al menos 10 caracteres')
        .max(255, 'El mensaje no puede tener más de 255 caracteres')
        .required('El mensaje es requerido')
});