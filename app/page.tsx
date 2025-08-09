
import Benefits from "./components/Benefits/Benefits";
import CaseStudies from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="w-screen min-h-screen h-full bg-black/80">
      <Benefits />
      <CaseStudies />
    </main>
  );
}
