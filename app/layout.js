import Header from "../components/Header";
import "./globals.css";
import Footer from "@/components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <title>INFOTECH</title> 
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}