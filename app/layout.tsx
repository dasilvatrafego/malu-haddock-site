import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Open_Sans,
  Mulish,
  Jost,
  Libre_Caslon_Text,
  Nunito_Sans,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { SITE_URL } from "@/lib/site";

/* Fontes do original que existem no Google Fonts */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-opensans",
  display: "swap",
});

/* Substitutas próximas das fontes pagas usadas no Wix */
const mulish = Mulish({ subsets: ["latin"], weight: ["300", "400", "700", "800"], variable: "--font-mulish", display: "swap" }); // ~ Avenir LT
const jost = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-jost", display: "swap" }); // ~ Futura LT
const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["400", "600", "700", "800"], variable: "--font-nunito-sans", display: "swap" }); // usada na página /cosmetico
const caslon = Libre_Caslon_Text({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-caslon-text", display: "swap" }); // ~ Adobe Caslon

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Malu Haddock Lobo | Formação em terapias alternativas",
  description:
    "Torne-se uma Aromaterapeuta Profissional com o Método Haddock Lobo — método validado em mais de 25 anos de prática clínica.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Malu Haddock Lobo",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${openSans.variable} ${mulish.variable} ${jost.variable} ${caslon.variable} ${nunito.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
