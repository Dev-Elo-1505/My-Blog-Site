import { ReactNode } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <main className="w-full flex flex-col justify-between min-h-screen">
        <div className="p-5 text-text bg-primary md:w-full">{children}</div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
