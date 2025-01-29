'use client';

import { RegisterSchema, TypeRegisterSchema } from "../schemes";
import AuthWrapper from "./AuthWrapper";
import { useForm, FormProvider } from "react-hook-form"; // Исправили здесь
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui"; 
import { Button } from "@/shared/components/ui";

export function RegisterForm() {
  const form = useForm<TypeRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

  const onSubmit = (values: TypeRegisterSchema) => {
    console.log(values);
  };

  return (
    <AuthWrapper
      heading="Регистрация"
      description="Чтобы войти на сайт, введите ваш email и пароль"
      backButtonLabel="Уже есть аккаунт? Войти"
      backButtonHref="/auth/login"
      isShowSocial
    >
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl><Input placeholder="name" {...field} /></FormControl>
            </FormItem>
          )} />

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input placeholder="email" {...field} /></FormControl>
            </FormItem>
          )} />

          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl><Input type="password" placeholder="password" {...field} /></FormControl>
            </FormItem>
          )} />

          <FormField control={form.control} name="passwordRepeat" render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat Password</FormLabel>
              <FormControl><Input type="password" placeholder="repeat password" {...field} /></FormControl>
            </FormItem>
          )} />

          {/* Кнопка отправки формы */}
          <Button type="submit">Зарегистрироваться</Button>
        </form>
      </FormProvider>
    </AuthWrapper>
  );
}
