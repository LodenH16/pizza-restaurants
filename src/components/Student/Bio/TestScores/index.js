import { TestScoresCard } from "./styles";

const TestScores = (props) => {
  console.log(props);
  return (
    <TestScoresCard>
      <ol>
        {props.scores.map((score, index) => {
          return (
            <li>
              Test {index + 1}: <span> {score}%</span>
            </li>
          );
        })}
      </ol>
    </TestScoresCard>
  );
};
export default TestScores;
