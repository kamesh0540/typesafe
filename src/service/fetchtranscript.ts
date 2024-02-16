import { YoutubeTranscript } from "youtube-transcript";

export async function fetchTranscript(videoUrl: string) {
  const transcript = await YoutubeTranscript.fetchTranscript(videoUrl);
  console.log(transcript);
}
