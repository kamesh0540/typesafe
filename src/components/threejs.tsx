import Spline from "@splinetool/react-spline";

export default function HeroComponent() {
  return (
    <div className="max-h-[40vh] max-w-[100vw] flex justify-center items-center mt-[25vh]">
      <Spline scene="/chips.spline" />
    </div>
  );
}
