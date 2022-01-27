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
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchTag, setSearchTag] = useState("");
  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.students);
        setFilteredStudents(data.students);
      });
  }, []);

  const searchStudents = (searchValue) => {
    //filter the students
    const filteredList = students.filter((student) => {
      //todo trim searchValue
      return (
        student.firstName.toUpperCase().includes(searchValue.toUpperCase()) ||
        student.lastName.toUpperCase().includes(searchValue.toUpperCase())
      );
    });
    //todo make switch into if else with variables
    //todo allow spaces
    const hasNameMatch = filteredList.length > 0;
    //const hasValue = searchValue !== "";
    switch (true) {
      case /\W/.test(searchValue):
        setErrorMessage("Error: Invalid Character");
        setFilteredStudents(students);
        break;
      case searchValue !== "" && hasNameMatch:
        setErrorMessage(null);
        setFilteredStudents(filteredList);
        break;
      case searchValue !== "" && !hasNameMatch:
        setErrorMessage("No results");
        setFilteredStudents(filteredList);
        break;
      default:
        setFilteredStudents(students);
        setErrorMessage(null);
        break;
    }
  };

  return (
    <AppWrapper>
      <SearchWrapper>
        <Input
          placeholder="Search by name"
          onChange={(e) => searchStudents(e.target.value)}
        ></Input>
        <Input
          placeholder="Search by tag"
          onChange={(e) => setSearchTag(e.target.value)}
        ></Input>
      </SearchWrapper>
      <StudentsWrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {filteredStudents.length > 0 &&
          filteredStudents.map((data, index) => (
            <Student
              key={`student${index}`}
              studentInfo={data}
              searchTag={searchTag}
            />
          ))}
      </StudentsWrapper>
    </AppWrapper>
  );
};

export default App;
