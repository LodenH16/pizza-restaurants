import { useState } from "react";
import { TestButtonImg, StudentCard, StudentImg, TestsButton } from "./styles";
import Bio from "./Bio";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

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
        <TestsButton onClick={() => setTestScoresDisplay(!testScoresDisplay)}>
          <TestButtonImg src={testScoresDisplay ? minus : plus} />
        </TestsButton>
      </StudentCard>
    </>
  );
};

export default Student;
