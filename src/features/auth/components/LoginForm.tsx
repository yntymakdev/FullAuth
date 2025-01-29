'use client';

import { RegisterSchema, TypeRegisterSchema } from "../schemes";
import AuthWrapper from "./AuthWrapper";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui"; 
import { Button } from "@/shared/components/ui";





export function LoginForm() {
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
      heading="Войти"
      description="Чтобы войти на сайт, введите ваш email и пароль"
      backButtonLabel="Нет аккаунта ? Регистрация"
      backButtonHref="/auth/register"
      isShowSocial
    >
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 space-y-2">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl><Input placeholder="name" {...field} /></FormControl>
              <FormMessage/>

            </FormItem>
          )} />

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input placeholder="email" {...field} /></FormControl>
              <FormMessage/>

            </FormItem>
          )} />

          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl><Input type="password" placeholder="password" {...field} /></FormControl>
              <FormMessage/>
            </FormItem>
          )} />


          <Button type="submit">Войти аккаунт</Button>
        </form>
      </FormProvider>
    </AuthWrapper>
  );
}
