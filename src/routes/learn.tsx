import Footer from "@/components/footer";
import LearnComp from "@/components/learnPage";
import { createFileRoute } from "@tanstack/react-router";

function LearnPage() {
  return (
    <>
      <div className="p-2">
        <LearnComp />
      </div>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/learn")({
  component: LearnPage,
});
