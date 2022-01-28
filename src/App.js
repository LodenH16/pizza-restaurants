import {
  ErrorMessage,
  Input,
  AppWrapper,
  SearchWrapper,
  StudentsWrapper,
} from "./styles";
import React, { useState, useEffect } from "react";
import Student from "./components/Student";

const App = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  //todo make errormessage an empty string
  const [errorMessage, setErrorMessage] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.students);
        setFilteredStudents(data.students);
      });
  }, []);

  const createErrorMessage = (message) => {
    setErrorMessage(message);
  };

  return (
    <AppWrapper>
      <SearchWrapper>
        <Input
          placeholder="Search by name"
          onChange={(e) => setSearchName(e.target.value)}
        ></Input>
        <Input
          placeholder="Search by tag"
          onChange={(e) => setSearchTag(e.target.value)}
        ></Input>
      </SearchWrapper>
      <StudentsWrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {students.map((data, index) => (
          <Student
            key={`student${index}`}
            studentInfo={data}
            searchTag={searchTag}
            createErrorMessage={createErrorMessage}
            searchName={searchName}
          />
        ))}
      </StudentsWrapper>
    </AppWrapper>
  );
};

export default App;
