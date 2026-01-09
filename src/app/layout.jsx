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
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
