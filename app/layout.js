import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "500"],
});

export const metadata = {
  title: "Averio Tours & Safaris | Beyond Safaris, Into Experiences",
  description: "Authentic Rwanda and East African tourism experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}