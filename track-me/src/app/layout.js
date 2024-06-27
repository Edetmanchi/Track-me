import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "my-FOOD",
  description: "A food ordering and delivery website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
          <div className="flex">
            <div className="hidden md:block h-{100vh} w-{350px}">
              <Sidebar/>
            </div>
            <div className="p-5 w-full md:max-w-[1140px]">
              {children}
            </div>
          </div>
        </body>
    </html>
  );
}
