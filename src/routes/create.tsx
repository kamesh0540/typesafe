import { createFileRoute } from "@tanstack/react-router";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BASEURL } from "@/lib/links";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import Footer from "@/components/footer";

export default function TeacherPage() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [prompt, setPrompt] = useState("");
  const [transcript, setTranscript] = useState("");
  const id = useUser();
  console.log(id.user?.id);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(`${BASEURL}/lecture/create`, {
        teacherId: id.user?.id,
        title: title,
        source: link,
        query: prompt,
        transcript: transcript,
      })
      .then((res) => console.log(res.data));
    console.log("Form submitted with Title:", title);
    console.log("Source Link:", link);
    console.log("Prompt for Notes:", prompt);
    console.log("transcript:", transcript);
    setTitle("");
    setLink("");
    setPrompt("");
    setTranscript("");
  };

  return (
    <>
      <form
        className="w-full mt-32 flex items-center justify-center text-white"
        onSubmit={handleSubmit}
      >
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
                Enter the title for the lecture:
              </Label>
              <Input
                className="bg-transparent"
                id="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
            <div className="grid gap-2 mt-8 text-white">
              <Label className="text-xl" htmlFor="source">
                Transcripted Notes
              </Label>
              <Input
                className="bg-transparent"
                id="source"
                placeholder="Enter the source link"
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
              />
            </div>
            <div className="grid gap-2 mt-8 text-white">
              <Label className="text-xl" htmlFor="query">
                Prompt for Notes
              </Label>
              <textarea
                className="bg-transparent border rounded-md"
                id="query"
                placeholder="  Enter the query"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
          </CardContent>
          <div className="flex justify-center items-center mb-2">
            <Button type="submit" className="items-center ">
              Submit
            </Button>
          </div>
        </Card>
      </form>
      <Footer />
    </>
  );
}

export const Route = createFileRoute("/create")({
  component: TeacherPage,
});
