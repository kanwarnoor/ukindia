"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

const NavbarContext = createContext<{
  value: boolean;
  setValue: (value: boolean) => void;
} | null>(null);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState(false);

  return (
    <NavbarContext.Provider value={{ value, setValue }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context.value;
}

export function useSetNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useSetNavbar must be used within a NavbarProvider");
  }
  return context.setValue;
}
