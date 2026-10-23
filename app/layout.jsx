import { Poppins, Manuale, Raleway } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manuale = Manuale({
  variable: "--font-manuale",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["800", "900"],
});

export const metadata = {
  title: "ITET Bangladesh",
  description: "Welcome to ITET Bangladesh – Uniting, empowering, and advancing professional textile engineers and technologists nationwide.",
  authors: [{ name: "ITET Bangladesh" }],
  keywords: [
    "ITET",
    "ITET Bangladesh",
    "Institution of Textile Engineers & Technologists",
    "Textile Engineers Bangladesh",
    "Textile Industry Bangladesh",
    "Welfare Trust ITET",
    "Textile Engineering Community",
  ],
  creator: "ITET Bangladesh",
  publisher: "The Institution of Textile Engineers & Technologists",
  openGraph: {
    title: "ITET Bangladesh | The Institution of Textile Engineers & Technologists",
    description: "The Institution of Textile Engineers & Technologists (ITET) is the apex professional body representing textile engineers and technologists in Bangladesh.",
    url: "https://itetbd.net",
    siteName: "ITET Bangladesh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITET Bangladesh | The Institution of Textile Engineers & Technologists",
    description: "The Institution of Textile Engineers & Technologists (ITET) is the apex professional body representing textile engineers and technologists in Bangladesh.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${manuale.variable} ${raleway.variable}`}>
      <body className={`${poppins.className} bg-white font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
