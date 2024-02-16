import { createFileRoute } from "@tanstack/react-router";
import LearnComp from './../components/LearnPage';

function LearnPage() {  
    return (
        <div className="p-2">
        <LearnComp/>
        </div>
    );
}

export const Route = createFileRoute("/learn")({
    component: LearnPage,
  });
  