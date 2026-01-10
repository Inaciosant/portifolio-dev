import Navbar from "@/layout/navbar/navbar";
import "./globals.css";
import { Footer } from "@/layout/footer/fotter";

export const metadata = {
  title: "Inacio Sant - Portfólio",
  description: "Desenvolvedor Full-Stack",
  author: "Inacio Sant",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
      className="min-h-screen flex flex-col"
      >
        <Navbar/>
        <main className="flex-1">

        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
