import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Header from "@/components/home/Header";
import Pricing from "@/components/home/Pricing";

export default function Home() {
  return (
    <main>
      <Header />
      <Features />
      <Pricing />
      <FAQ />
    </main>
  );
}
