import { TestScoresCard } from "./styles";

const TestScores = ({ grades }) => {
  return (
    <TestScoresCard>
      <ol>
        {grades.map((score, index) => {
          return (
            <li key={`grade${index}`}>
              Test {index + 1}: <span> {score}%</span>
            </li>
          );
        })}
      </ol>
    </TestScoresCard>
  );
};
export default TestScores;
