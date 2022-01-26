import { ErrorMessage, Input, AppWrapper } from "./styles";
import React, { useState, useEffect } from "react";
import Student from "./components/Student";

const App = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

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
      return (
        student.firstName.toUpperCase().includes(searchValue.toUpperCase()) ||
        student.lastName.toUpperCase().includes(searchValue.toUpperCase())
      );
    });
    console.log(students);
    switch (true) {
      case /\W/.test(searchValue):
        setErrorMessage("Error: Invalid Character");
        setFilteredStudents(students);
        break;
      case searchValue !== "" && filteredList.length > 0:
        console.log("here");
        setErrorMessage(null);
        setFilteredStudents(filteredList);
        break;
      case searchValue !== "" && filteredList.length === 0:
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
      <Input
        placeholder="Search by name"
        onChange={(event) => searchStudents(event.target.value)}
      ></Input>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {filteredStudents.length > 0 &&
        filteredStudents.map((data, index) => (
          <Student key={`student${index}`} data={data} />
        ))}
    </AppWrapper>
  );
};

export default App;
