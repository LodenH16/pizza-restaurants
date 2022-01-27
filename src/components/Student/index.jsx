import { useState } from "react";
import { TestButtonImg, StudentCard, StudentImg, TestsButton } from "./styles";
import Bio from "./Bio";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

const Student = ({ studentInfo, searchTag }) => {
  const [testScoresDisplay, setTestScoresDisplay] = useState(false);
  const [tags, setTags] = useState([]);
  const { city, company, email, firstName, grades, lastName, pic, skill } =
    studentInfo;
  const addTag = (newTag) => {
    setTags([...tags, newTag]);
  };
  //get average from array of grades
  const gradeAverage =
    grades.reduce((sum, data) => {
      return sum + parseInt(data);
    }, 0) / grades.length;
  if (searchTag === "" || tags.join().includes(searchTag)) {
    return (
      <>
        <StudentCard>
          <StudentImg src={pic} alt={"student profile pic"} />
          <Bio
            city={city}
            company={company}
            email={email}
            firstName={firstName}
            lastName={lastName}
            skill={skill}
            gradeAverage={gradeAverage}
            grades={grades}
            testScoresDisplay={testScoresDisplay}
            addTagFunction={addTag}
            tags={tags}
          />
          <TestsButton onClick={() => setTestScoresDisplay(!testScoresDisplay)}>
            <TestButtonImg src={testScoresDisplay ? minus : plus} />
          </TestsButton>
        </StudentCard>
      </>
    );
  } else {
    return null;
  }
};

export default Student;
