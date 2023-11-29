import { useState } from "react";
import questions from "./data";
import Questions from "./Questions";

const App = () => {
  const [activeId, setActiveId] = useState(null);

  function toggleActive(id) {
    setActiveId(id);
  }

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleActive={toggleActive}
      />
    </main>
  );
};
export default App;
