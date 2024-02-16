import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quiz/$quizId")({
  loader: async ({ params: { quizId } }) => null,
  stringifyParams: ({ quizId }) => ({ quizId: `${quizId}` }),
  component: QuizPage,
});

function QuizPage() {
  const quiz = Route.useParams();
  console.log(quiz);
  return (
    <>
      <h1 className="text-white">this is quiz number {quiz.quizId}</h1>
    </>
  );
}
