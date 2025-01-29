import { z } from "zod";
export const RegisterSchema = z
  .object({
    name: z.string().min(1, {
      message: "Введите имя",
    }),
    email: z.string().email({
      message: "Неккоректная почта",
    }),
    password: z.string().min(6, {
      message: "Пароль  минимум  6 символов",
    }),
    passwordRepeat: z.string().min(6, {
      message: "Пароль потдтверждение   минимум  6 символов",
    }),
  })
  .refine((data) => data.password === data.passwordRepeat, {
    message: "Пароли не совпадают",
    path: ["PasswordRepeat"],
  });

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>;
