import { createFileRoute } from "@tanstack/react-router";


function ContactPage() {
  return <div className="text-white">This is contact Page</div>;
}

export const Route = createFileRoute("/contact")({
  component: ContactPage
});
