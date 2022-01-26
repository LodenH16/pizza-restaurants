import TestScores from "./TestScores";
import { BioWrapper } from "./styles";

const Bio = ({ info, gradeAverage, testScoresDisplay }) => {
  const { firstName, lastName, email, company, skill, grades } = info;

  return (
    <BioWrapper>
      <h2>{firstName.toUpperCase() + " " + lastName.toUpperCase()}</h2>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Skill: {skill}</p>
      <p>Average: {gradeAverage}%</p>
      {testScoresDisplay && <TestScores scores={grades} />}
    </BioWrapper>
  );
};
export default Bio;
