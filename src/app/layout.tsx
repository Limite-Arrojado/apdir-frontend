import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["300", "600", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "APDIR – Associação Portuguesa de Direito da Insolvência e Recuperação",
  description:
    "A APDIR é uma associação sem fins lucrativos, fundada em 2018, que se revê na ideia de que o direito da insolvência e recuperação não é um mero instrumento de gestão de crise, mas antes um vector estratégico para o desenvolvimento e capacidade de atracção de qualquer economia num mundo global.",
  icons: {
    icon: {
      url: "/favicon2.ico",
      href: "/favicon2.ico",
      sizes: "any",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className + " bg-white"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
