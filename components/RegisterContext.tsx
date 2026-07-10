"use client";

import { createContext, useContext, useState, useCallback } from "react";

type RegisterContextValue = {
  open: boolean;
  openRegister: () => void;
  closeRegister: () => void;
};

const RegisterContext = createContext<RegisterContextValue | null>(null);

export function RegisterProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  const openRegister = useCallback(() => setOpen(true), []);
  const closeRegister = useCallback(() => setOpen(false), []);

  return (
    <RegisterContext.Provider value={{ open, openRegister, closeRegister }}>
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const ctx = useContext(RegisterContext);
  if (!ctx) {
    throw new Error("useRegister must be used within a RegisterProvider");
  }
  return ctx;
}
