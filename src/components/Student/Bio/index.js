import TestScores from "./TestScores";
import { BioWrapper, StudentDetails, StudentName } from "./styles";
import { Input } from "../../../styles";
import TagBlock from "./TagBlock";

const Bio = ({
  info,
  gradeAverage,
  testScoresDisplay,
  addTagFunction,
  tags,
}) => {
  const { firstName, lastName, email, company, skill, grades } = info;

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
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
        <ul>
          <li>Email: {email}</li>
          <li>Company: {company}</li>
          <li>Skill: {skill}</li>
          <li>Average: {gradeAverage}%</li>
        </ul>
        {testScoresDisplay && <TestScores scores={grades} />}
        <TagBlock tags={tags} />
        <Input placeholder="Add a tag" onKeyUp={(e) => handleKeyPress(e)} />
      </BioWrapper>
    </StudentDetails>
  );
};
export default Bio;
