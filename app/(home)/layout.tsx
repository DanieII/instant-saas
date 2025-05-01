import Footer from "@/components/home/Footer";
import Navigation from "@/components/home/Navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
