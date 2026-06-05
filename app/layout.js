import "@/app/globals.css";
import Header from "./components/Header";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
