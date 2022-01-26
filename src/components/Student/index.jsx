import { useState } from "react";
import { PlusButton, StudentCard, StudentImg } from "./styles";
import Bio from "./Bio";

const Student = (props) => {
  const [testScoresDisplay, setTestScoresDisplay] = useState(false);
  console.log(testScoresDisplay);
  const info = props.data;

  //get average from array of grades
  const gradeAverage =
    info.grades.reduce((sum, data) => {
      return sum + parseInt(data);
    }, 0) / info.grades.length;
  //TODO add keys
  return (
    <>
      <StudentCard>
        <StudentImg src={info.pic} alt={"student profile pic"} />
        <Bio
          info={info}
          gradeAverage={gradeAverage}
          testScoresDisplay={testScoresDisplay}
        />
        <PlusButton onClick={() => setTestScoresDisplay(!testScoresDisplay)}>
          X
        </PlusButton>
      </StudentCard>
    </>
  );
};

export default Student;
