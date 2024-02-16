import { createFileRoute } from "@tanstack/react-router";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function TeacherPage() {
  return (
    <form className="w-full mt-32 flex items-center justify-center text-white">
      <Card className="w-[70%] h-[80%] bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white text-2xl">
            {" "}
            Lecture Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 mt-4 text-white">
            <Label className="text-xl" htmlFor="title">
              Enter the title for the lecture:{" "}
            </Label>
            <Input
              className="bg-transparent"
              id="title"
              placeholder="Enter the title"
            />
          </div>
          <div className="grid gap-2 mt-8 text-white">
            <Label className="text-xl" htmlFor="source">
              Source Link
            </Label>
            <Input
              className="bg-transparent"
              id="source"
              placeholder="Enter the source link"
            />
          </div>
          <div className="grid gap-2 mt-8 text-white">
            <Label className="text-xl" htmlFor="source">
              Prompt for Notes
            </Label>
            <textarea
              className="bg-transparent border rounded-md"
              id="query"
              placeholder="  Enter the query"
            />
          </div>
        </CardContent>
      </Card>
    </form>
  );
}

export const Route = createFileRoute("/create")({
  component: TeacherPage,
});
