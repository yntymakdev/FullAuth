import { buttonVariants } from "@/shared/components/ui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-5 text-center">
      <h1 className="text-4xl font-bold">Главная страница </h1>
      <Link href="/auth/login" className={buttonVariants()}>
        Войти в аккаунт
      </Link>
    </div>
  );
}
