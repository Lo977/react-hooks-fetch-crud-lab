import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onHandleUpdate, onHandleDelete }) {
  const questionsList = questions.map((question) => {
    return (
      <QuestionItem
        key={question.id}
        question={question}
        onHandleUpdate={onHandleUpdate}
        onHandleDelete={onHandleDelete}
      />
    );
  });
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsList}</ul>
    </section>
  );
}

export default QuestionList;
