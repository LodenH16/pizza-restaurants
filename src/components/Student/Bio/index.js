import TestScores from "./TestScores";
import { BioWrapper, StudentDetails, StudentName } from "./styles";
import { Input } from "../../../styles";

const Bio = ({ info, gradeAverage, testScoresDisplay, addTagFunction }) => {
  const { firstName, lastName, email, company, skill, grades } = info;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
      addTagFunction(e.target.value);
      e.target.value = "";
    }
  };

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
        <Input placeholder="Add a tag" onKeyUp={(e) => handleKeyPress(e)} />
      </BioWrapper>
    </StudentDetails>
  );
};
export default Bio;
