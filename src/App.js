import { Input, AppWrapper, SearchWrapper, StudentsWrapper } from "./styles";
import React, { useState, useEffect } from "react";
import Student from "./components/Student";

const App = () => {
  const [students, setStudents] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.students);
      });
  }, []);

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
        {students.map((data, index) => (
          <Student
            key={`student${index}`}
            studentInfo={data}
            searchTag={searchTag}
            searchName={searchName}
          />
        ))}
      </StudentsWrapper>
    </AppWrapper>
  );
};

export default App;
