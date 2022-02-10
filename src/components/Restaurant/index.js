import { useState, useEffect } from "react";
import {
  ToppingsButtonImg,
  RestaurantCard,
  RestaurantImg,
  ToppingsButton,
} from "./styles";
import Bio from "./Bio";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";

const Restaurant = ({ restaurantInfo, searchTag, searchName }) => {
  const [toppingsDisplay, setToppingsDisplay] = useState(false);
  const [tags, setTags] = useState([]);
  const [hasNameMatch, setNameMatch] = useState(true);
  const [hasTagMatch, setTagMatch] = useState(true);
  const { city, price, firstName, toppings, lastName, pic } = restaurantInfo;
  //concat first and last name
  const fullName = firstName.toUpperCase().concat(" ", lastName.toUpperCase());

  const email = firstName.slice(0, 3) + lastName.slice(0, 4) + "@pizzamail.com";

  const addTag = (newTag) => {
    setTags([...tags, newTag]);
  };

  useEffect(() => {
    setNameMatch(fullName.includes(searchName.trim().toUpperCase()));
    setTagMatch(tags.join("").includes(searchTag));
  }, [fullName, searchTag, searchName, tags]);

  if (hasNameMatch && hasTagMatch) {
    return (
      <RestaurantCard role={"restaurant"}>
        <RestaurantImg src={pic} alt={"Restaurant profile pic"} />
        <Bio
          city={city}
          email={email}
          firstName={firstName}
          lastName={lastName}
          price={price}
          toppings={toppings}
          testScoresDisplay={toppingsDisplay}
          addTagFunction={addTag}
          tags={tags}
        />
        <ToppingsButton onClick={() => setToppingsDisplay(!toppingsDisplay)}>
          <ToppingsButtonImg src={toppingsDisplay ? minus : plus} />
        </ToppingsButton>
      </RestaurantCard>
    );
  } else {
    return null;
  }
};

export default Restaurant;
