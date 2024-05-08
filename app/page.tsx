import Hero from "@/components/Hero";
import Market from "@/components/Market";
import PassNft from "@/components/PassNft";
import Profit from "@/components/Profit";
import Token from "@/components/Token";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <PassNft />
      <Profit />
      <Vision />
      <Token />
      <Market />
    </main>
  );
}
