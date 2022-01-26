import { useState } from "react";
import { TestButtonImg, StudentCard, StudentImg, TestsButton } from "./styles";
import Bio from "./Bio";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

const Student = (props) => {
  //todo destructure props
  const [testScoresDisplay, setTestScoresDisplay] = useState(false);
  const [tags, setTags] = useState([]);
  const info = props.data;

  const addTag = (newTag) => {
    setTags([...tags, newTag]);
  };
  //get average from array of grades
  const gradeAverage =
    info.grades.reduce((sum, data) => {
      return sum + parseInt(data);
    }, 0) / info.grades.length;
  return (
    <>
      <StudentCard>
        <StudentImg src={info.pic} alt={"student profile pic"} />
        <Bio
          info={info}
          gradeAverage={gradeAverage}
          testScoresDisplay={testScoresDisplay}
          addTagFunction={addTag}
        />
        <TestsButton onClick={() => setTestScoresDisplay(!testScoresDisplay)}>
          <TestButtonImg src={testScoresDisplay ? minus : plus} />
        </TestsButton>
      </StudentCard>
    </>
  );
};

export default Student;
