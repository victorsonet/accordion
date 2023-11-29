import Question from "./Question";

function Questions({ questions, activeId, toggleActive }) {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleActive={toggleActive}
          />
        );
      })}
    </section>
  );
}
export default Questions;
