'use client'

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
  <Toaster position="bottom-right" duration={6000}/>
  );
}