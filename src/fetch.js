import { createRestaurant } from "./createRestaurant";
// Function that _simulates_ a wrapped `fetch(...)` call to a REST API.
// Delay response by a random amount to simulate network delays.
const delay = (n) => new Promise((resolve) => setTimeout(resolve, n));

export function fetchRestaurants() {
  let arrayOfRestaurants = [];
  for (let i = 0; i <= 25; i++) {
    arrayOfRestaurants.push(createRestaurant());
  }

  return delay(Math.random() * 1000).then(() => arrayOfRestaurants);
}
