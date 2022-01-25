import { TestScoresCard } from "./styles";

const TestScores = (props) => {
  console.log(props);
  return (
    <TestScoresCard>
      {props.scores.map((score, index) => {
        return (
          <p>
            Test {index + 1}: {score}%
          </p>
        );
      })}
    </TestScoresCard>
  );
};
export default TestScores;
