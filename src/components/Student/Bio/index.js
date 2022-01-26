import TestScores from "./TestScores";
import { BioWrapper, StudentDetails, StudentName } from "./styles";
import { Input } from "../../../styles";
//import { useState } from "react";

const Bio = ({ info, gradeAverage, testScoresDisplay }) => {
  //const [tags, setTags] = useState([]);
  const { firstName, lastName, email, company, skill, grades } = info;

  return (
    <StudentDetails>
      <StudentName>
        {firstName.toUpperCase() + " " + lastName.toUpperCase()}
      </StudentName>
      <BioWrapper>
        <p>Email: {email}</p>
        <p>Company: {company}</p>
        <p>Skill: {skill}</p>
        <p>Average: {gradeAverage}%</p>
        {testScoresDisplay && <TestScores scores={grades} />}
        <Input placeholder="Add a tag" />
      </BioWrapper>
    </StudentDetails>
  );
};
export default Bio;
