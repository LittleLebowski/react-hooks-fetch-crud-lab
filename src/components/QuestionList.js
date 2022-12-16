import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/questions");
      const resp = await data.json();
      setQuestions(resp);
    };
    fetchData();
  }, []);

  function onDeleteQuestion(deletedQuestion) {
    setQuestions(
      questions.filter((question) => question.id !== deletedQuestion.id)
    );
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((item) => (
          <QuestionItem
            key={item.id}
            question={item}
            onDeleteQuestion={onDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
