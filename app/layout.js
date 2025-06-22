import "./globals.css";
import TopHeader from "./components/TopHeader";
import MainHeader from "./components/MainHeader";
import Footer from "./components/Footer";

export const metadata = {
  title: "Shop the Best Products Online | MyStore",
  description: "Browse our exclusive range of premium products at affordable prices. Free shipping & easy returns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout_wrapper">
        <TopHeader />
        <MainHeader />
        {children}  
        <Footer />
        </div>
      </body>
      
    </html>
  );
}
