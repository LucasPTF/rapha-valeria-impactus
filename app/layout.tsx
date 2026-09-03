import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Workshop de Ozonioterapia | Instituto Impactus",
  description:
    "Acompanhe uma aplicação completa de ozonioterapia e entenda como anamnese, dose, via e frequência são decididas caso a caso.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
