import "@/app/globals.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="">
        <Header />
        <div className="flex">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
