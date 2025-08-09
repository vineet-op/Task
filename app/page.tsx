
import Benefits from "./components/Benefits/Benefits";
import Case_Studies from "./components/Case_Studies/Case_Studies";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="w-screen min-h-screen h-full bg-black/80">
      <Hero />
      <Benefits />
      <Case_Studies />
      <Footer />
    </main>
  );
}
