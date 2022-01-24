import "./App.css";
import { StudentGlobalStyle } from "./styles";
import React, { useState } from "react";
import Student from "./components/Student";

const App = () => {
  const [data, setData] = useState(null);

  React.useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((data) => setData(data.students));
  }, []);
  console.log(data);
  return (
    <div className="App">
      <StudentGlobalStyle />
      {data && data.map((data) => <Student data={data} />)}
    </div>
  );
};

export default App;
