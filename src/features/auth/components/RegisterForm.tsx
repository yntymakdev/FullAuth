'use client';
import ReCAPTCHA from 'react-google-recaptcha'
import { RegisterSchema, TypeRegisterSchema } from "../schemes";
import AuthWrapper from "./AuthWrapper";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/shared/components/ui";
import { Input } from "@/shared/components/ui"; 
import { Button } from "@/shared/components/ui";
import { useTheme } from "next-themes";
import { useState } from "react";

export function RegisterForm() {

const {theme} = useTheme()
const [recapthcaValue,setRecapthcaValue] = useState<string | null>(null)

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

          <FormField control={form.control} name="passwordRepeat" render={({ field }) => (
            <FormItem>
              <FormLabel>Repeat Password</FormLabel>
              <FormControl><Input type="password" placeholder="repeat password" {...field} /></FormControl>
              <FormMessage/>

            </FormItem>
          )} />

<div className="flex justify-center">
<ReCAPTCHA sitekey  ={process.env.GOOGLE_RECAPTCHA_SITE_KEY as string} onChange={setRecapthcaValue} theme={theme === 'light' ? 'light': 'dark'} />

</div>
          <Button type="submit">Создать аккаунт</Button>
        </form>
      </FormProvider>
    </AuthWrapper>
  );
}
