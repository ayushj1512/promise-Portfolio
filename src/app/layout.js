import "./globals.css";
import { Poppins } from "next/font/google";
import ThemeWrapper from "../components/common/ThemeWrapper"; // ✅ Client wrapper

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "ayush juneja | Portfolio",
  description:
    "Portfolio of ayush juneja — Developer, Designer, and Innovator. Explore projects, skills, and journey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased transition-all duration-300`}
      >
        {/* ✅ ThemeWrapper is a client component that wraps children in ThemeProvider */}
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
