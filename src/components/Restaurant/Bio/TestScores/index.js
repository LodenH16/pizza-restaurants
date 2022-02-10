import { ToppingsCard } from "./styles";

const Toppings = ({ toppings }) => {
  return (
    <ToppingsCard>
      <ol>
        {toppings.map((toppings, index) => {
          return (
            <li key={`grade${index}`}>
              {toppings.name}: <span> {toppings.price}</span>
            </li>
          );
        })}
      </ol>
    </ToppingsCard>
  );
};
export default Toppings;
