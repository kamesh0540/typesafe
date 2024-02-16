import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/quiz/$quizId")({
  loader: async ({ params: { quizId } }) => null,
  component: QuizPage,
});

function QuizPage() {
  const quiz = Route.useParams();
  console.log(quiz);

  return (
    <div className="flex justify-center w-full py-11">
      <div className="max-w-screen-md w-full overflow-y-auto">
        <div className="space-y-8 text-white">
          <h2 className="text-3xl font-bold">Quiz on Introduction to Python</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">
                Question 1: What is the purpose of variables in programming?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q1"
                    type="radio"
                    value="a"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    a) To create new objects
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q1"
                    type="radio"
                    value="b"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    b) To store data in memory
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q1"
                    type="radio"
                    value="c"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    c) To execute code
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q1"
                    type="radio"
                    value="d"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    d) To define functions
                  </span>
                </label>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                Question 2: Which of the following is not a primitive type in
                Python?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q2"
                    type="radio"
                    value="a"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    a) Integer
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q2"
                    type="radio"
                    value="b"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    b) Float
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q2"
                    type="radio"
                    value="c"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    c) Boolean
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q2"
                    type="radio"
                    value="d"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    d) Array
                  </span>
                </label>
              </div>
            </div>

            {/* Remaining questions and options follow the same structure */}

            {/* Question 3 */}
            <div>
              <h3 className="text-lg font-semibold">
                Question 3: What is the syntax to assign a value to a variable
                in Python?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q3"
                    type="radio"
                    value="a"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    a) var &lt;value&gt;
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q3"
                    type="radio"
                    value="b"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    b) &lt;var&gt; = &lt;value&gt;
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q3"
                    type="radio"
                    value="c"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    c) &lt;value&gt; = &lt;var&gt;
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q3"
                    type="radio"
                    value="d"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    d) define &lt;var&gt; as &lt;value&gt;
                  </span>
                </label>
              </div>
            </div>
            {/* Question 4 */}
            <div>
              <h3 className="text-lg font-semibold">
                Question 4: True or False: Python is a case-insensitive
                language.
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q4"
                    type="radio"
                    value="a"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    a) True
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q4"
                    type="radio"
                    value="b"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    b) False
                  </span>
                </label>
              </div>
            </div>

            {/* Question 5 */}
            <div>
              <h3 className="text-lg font-semibold">
                Question 5: What is the datatype of the following variable:
                "Python Programming"?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q5"
                    type="radio"
                    value="a"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    a) Integer
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q5"
                    type="radio"
                    value="b"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    b) Float
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q5"
                    type="radio"
                    value="c"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    c) Boolean
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="w-4 h-4 border-gray-300 rounded-md peer"
                    name="q5"
                    type="radio"
                    value="d"
                  />
                  <span className="bg-zinc-400 w-full h-10 rounded-md flex items-center justify-center peer-checked:bg-blue-500 peer-checked:ring-blue-500 transition-colors text-sm text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:peer-checked:bg-blue-500 dark:peer-checked:ring-blue-500">
                    d) String
                  </span>
                </label>
              </div>
            </div>
            <Button className="flex items-center ml-80 ">Submit answers</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
