import TestScores from "./TestScores";
import { BioWrapper, StudentDetails, StudentName } from "./styles";
import { Input } from "../../../styles";
import TagBlock from "./TagBlock";

const Bio = ({
  firstName,
  lastName,
  email,
  company,
  skill,
  grades,
  gradeAverage,
  testScoresDisplay,
  addTagFunction,
  tags,
}) => {
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
        {testScoresDisplay && <TestScores grades={grades} />}
        <TagBlock tags={tags} />
        <Input placeholder="Add a tag" onKeyUp={(e) => handleKeyPress(e)} />
      </BioWrapper>
    </StudentDetails>
  );
};
export default Bio;
