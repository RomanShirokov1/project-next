import { z } from 'zod';

const russianPhoneNumberRegex = /^\+7\d{10}$/;

export const checkoutFormSchema = z.object({
  firstName: z.string().min(2, { message: 'Имя должно содержать не менее 2-х символов' }),
  lastName: z.string().min(2, { message: 'Фамилия должна содержать не менее 2-х символов' }),
  email: z.string().email({ message: 'Введите корректную почту' }),
  phone: z.string()
    .regex(russianPhoneNumberRegex, { message: 'Введите номер телефона в формате +79999999999' })
    .min(12, { message: 'Номер телефона должен состоять из 12 символов' }),
  address: z.string().min(5, { message: 'Введите корректный адрес' }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;