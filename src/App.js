import { Input, AppWrapper, SearchWrapper, StudentsWrapper } from "./styles";
import React, { useState, useEffect } from "react";
import Student from "./components/Student";
import { fetchStudents } from "./fetch";

const App = () => {
  const [students, setStudents] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    let isMounted = true;
    fetchStudents().then((data) => {
      if (isMounted) setStudents(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <AppWrapper>
      <SearchWrapper>
        <Input
          placeholder="Search by name"
          onChange={(e) => setSearchName(e.target.value)}
          role={"searchBar"}
        ></Input>
        <Input
          placeholder="Search by tag"
          onChange={(e) => setSearchTag(e.target.value)}
          role={"searchBar"}
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
