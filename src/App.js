import { ErrorMessage, Input, AppWrapper, SearchWrapper } from "./styles";
import React, { useState, useEffect } from "react";
import Student from "./components/Student";

const App = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
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
      <SearchWrapper>
        <Input
          placeholder="Search by name"
          onChange={(e) => searchStudents(e.target.value)}
        ></Input>
        {/*I don't like this*/}
        <Input
          className="secondInput"
          placeholder="Search by tag"
          onChange={(e) => setSearchTag(e.target.value)}
        ></Input>
      </SearchWrapper>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {filteredStudents.length > 0 &&
        filteredStudents.map((data, index) => (
          <Student
            key={`student${index}`}
            studentInfo={data}
            searchTag={searchTag}
          />
        ))}
    </AppWrapper>
  );
};

export default App;
