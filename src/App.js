import "./App.css";
import { StudentGlobalStyle } from "./styles";
import React, { useState, useEffect } from "react";
import Student from "./components/Student";

const App = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => setStudents(data.students));
  }, []);

  const searchStudents = (searchValue) => {
    //filter the students
    const filteredList = students.filter((student) => {
      return (
        student.firstName.toUpperCase().includes(searchValue.toUpperCase()) ||
        student.lastName.toUpperCase().includes(searchValue.toUpperCase())
      );
    });
    console.log("SearchValue: ", searchValue);
    switch (true) {
      case /\W/.test(searchValue):
        console.log("here");
        setErrorMessage("Error: Invalid Character");
        setFilteredStudents(students);
        break;
      case searchValue !== "" && filteredList.length > 0:
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
    <div className="App">
      <input
        placeholder="Search by name"
        onChange={(event) => searchStudents(event.target.value)}
      ></input>
      {errorMessage && <p>{errorMessage}</p>}
      <StudentGlobalStyle />
      {filteredStudents &&
        filteredStudents.map((data) => <Student data={data} />)}
    </div>
  );
};

export default App;
