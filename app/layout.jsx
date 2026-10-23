import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import "./globals.css";

export const metadata = {
  title: {
    default: "ITET Bangladesh",
    template: "%s | ITET Bangladesh",
  },
  description: "The Institution of Textile Engineers & Technologists (ITET), Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
