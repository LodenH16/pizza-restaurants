import Toppings from "./TestScores";
import { BioWrapper, RestaurantDetails, RestaurantName } from "./styles";
import { Input } from "../../../styles";
import TagBlock from "./TagBlock";

const Bio = ({
  firstName,
  lastName,
  email,
  testScoresDisplay,
  addTagFunction,
  tags,
  city,
  price,
  toppings,
}) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTagFunction(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <RestaurantDetails>
      <RestaurantName>
        {firstName.toUpperCase() + " " + lastName.toUpperCase()}
      </RestaurantName>
      <BioWrapper>
        <ul>
          <li>Email: {email}</li>
          <li>City: {city}</li>
          <li>Price: {price}</li>
        </ul>
        {testScoresDisplay && <Toppings toppings={toppings} />}
        <TagBlock tags={tags} />
        <Input placeholder="Add a tag" onKeyUp={(e) => handleKeyPress(e)} />
      </BioWrapper>
    </RestaurantDetails>
  );
};
export default Bio;
