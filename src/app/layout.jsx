import Navbar from "@/components/navbar/navbar";
import "./globals.css";

export const metadata = {
  title: "Inacio Sant Dev",
  description: "Desenvolvedor Full Stack",
  author: "Inacio Sant",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
