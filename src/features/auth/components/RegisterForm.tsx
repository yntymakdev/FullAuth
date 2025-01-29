"use client";
import { RegisterSchema, TypeRegisterSchema } from "../schemes";
import AuthWrapper from "./AuthWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
      heading={"Регистрация"}
      description={"Чтобы войти на сайт введите email и пароль"}
      backButtonLabel={"Уже есть аккаунт ? Войти"}
      backButtonHref={"/auth/login"}
      isShowSocial
    >
      RegisterForm
    </AuthWrapper>
  );
}
