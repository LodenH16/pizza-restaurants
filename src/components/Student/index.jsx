import { StudentCard, StudentImg } from "./styles";

const Student = (props) => {
  const info = props.data;

  //get average from array of grades
  const gradeAverage =
    info.grades.reduce((sum, data) => {
      return sum + parseInt(data);
    }, 0) / info.grades.length;

  return (
    <>
      <StudentCard>
        <StudentImg src={info.pic} alt={"student profile pic"} />
        <div className="bio">
          <h2>
            {info.firstName.toUpperCase() + " " + info.lastName.toUpperCase()}
          </h2>
          <p>Email: {info.email}</p>
          <p>Company: {info.company}</p>
          <p>Skill: {info.skill}</p>
          <p>Average: {gradeAverage}%</p>
        </div>
      </StudentCard>
    </>
  );
};

export default Student;
