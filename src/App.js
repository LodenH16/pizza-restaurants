import { Input, AppWrapper, SearchWrapper, RestaurantsWrapper } from "./styles";
import React, { useState, useEffect } from "react";
import Restaurant from "./components/Restaurant";
import { fetchRestaurants } from "./fetch";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const [searchName, setSearchName] = useState("");
  useEffect(() => {
    let isMounted = true;
    fetchRestaurants().then((data) => {
      if (isMounted) setRestaurants(data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AppWrapper>
      <SearchWrapper>
        <Input
          placeholder="Search by name"
          onChange={(e) => setSearchName(e.target.value)}
          role={"searchBar"}
        ></Input>
        <Input
          placeholder="Search by tag"
          onChange={(e) => setSearchTag(e.target.value)}
          role={"searchBar"}
        ></Input>
      </SearchWrapper>
      <RestaurantsWrapper>
        {restaurants.map((data, index) => (
          <Restaurant
            key={`restaurant${index}`}
            restaurantInfo={data}
            searchTag={searchTag}
            searchName={searchName}
          />
        ))}
      </RestaurantsWrapper>
    </AppWrapper>
  );
};

export default App;
