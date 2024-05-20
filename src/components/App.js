import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((r) => r.json())
      .then((data) => setQuestions(data));
  }, []);
  // console.log(questions);
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  function handleUpdate(param) {
    const updatedItem = questions.map((question) => {
      if (question.id === param.id) {
        return param;
      } else {
        return question;
      }
    });
    setQuestions(updatedItem);
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  function handleSubmit(newItem) {
    setQuestions([...questions, newItem]);
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//
  function handleDelete(param) {
    const deletedItem = questions.filter(
      (question) => question.id !== param.id
    );
    setQuestions(deletedItem);
  }
  // ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,//

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onHandleSubmit={handleSubmit} />
      ) : (
        <QuestionList
          questions={questions}
          onHandleUpdate={handleUpdate}
          onHandleDelete={handleDelete}
        />
      )}
    </main>
  );
}

export default App;
