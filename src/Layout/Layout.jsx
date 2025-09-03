import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header>
    
      </Header>

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
