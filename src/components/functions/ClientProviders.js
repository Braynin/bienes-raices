"use client";
import { DarkModeProvider } from "./darkModeContext.js";

export default function ClientProviders({ children }) {
  return <DarkModeProvider>{children}</DarkModeProvider>;
}
