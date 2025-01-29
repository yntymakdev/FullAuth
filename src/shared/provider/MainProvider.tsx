"use client";
import { type PropsWithChildren } from "react";
import { TanstackQueryProvider } from "./TanstackQueryProvider";
import { ThemeProvider } from "./ThemeProvider";
import { ToastProvider } from "./ToastProvider";

export function MainProvider({ children }: PropsWithChildren<unknown>) {
  return (
    <TanstackQueryProvider>
      <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
        <ToastProvider/>
        {children}
      </ThemeProvider>
    </TanstackQueryProvider>
  );
}
