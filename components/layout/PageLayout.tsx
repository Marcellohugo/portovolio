import Nav from "@/components/navbar/NavProfile"; // Menggunakan Nav yang sesuai
import Aurora from "@/components/ui/background/Aurora";
import Footer from "@/components/shared/Footer";
import React from "react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <section className="relative w-full">
      <Nav />
      <div className="fixed inset-0 -z-10">
        <Aurora colorStops={["#092965", "#A3D8FF", "#092965"]} />
      </div>
      <main className="relative z-10 pt-24">
        {children}
      </main>
      <Footer />
    </section>
  );
}