import { Ubuntu } from "next/font/google";
import "./globals.css";
import ReduxWrapper from "@/components/ReduxWrapper";
import Navbar from "@/components/Navbar";

const inter = Ubuntu({ weight: ["300", "400", "500"], subsets: ["latin"] });

export const metadata = {
  title: "QuadB Tech",
  description: "A Movie App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxWrapper>
        <body className={`${inter.className} min-h-screen p-4`}>
          <div className="w-full h-full px-6 py-4 bg-gray-400 bg-opacity-0 shadow-2xl rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-lg drop-shadow-2xl">
            <Navbar />
            {children}
          </div>
        </body>
      </ReduxWrapper>
    </html>
  );
}
