import HeroComponent from "@/components/threejs";
import { createLazyFileRoute } from "@tanstack/react-router";

function HomePage() {
  return (
    <>
      <HeroComponent />
      <div className="text-transparent text-center bg-gradient-to-r from-cyan-600 via-cyan-200 to-green-500 bg-clip-text text-6xl font-semibold font-bold relative z-20 ">
        LEARNUP
      </div>
    </>
  );
}

export const Route = createLazyFileRoute("/")({
  component: HomePage,
});
