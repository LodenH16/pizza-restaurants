const firstNames = [
  "Father's",
  "The Dude's",
  "Checker's",
  "Heather's",
  "Biggie Cheese's",
  "Little Cheese's",
  "Inn of",
  "Best",
  "Roundest",
  "Crispiest",
  "Crunching",
  "Block's Best",
  "Big Round",
];
const lastNames = [
  "Pies",
  "Pizzas",
  "Cheesy Circles",
  "Thicc 'n' Cheesies",
  "Doughs",
  "Flavors",
  "Za",
];
const cities = [
  "Huntington, NY",
  "Pittsburgh, PA",
  "Bowlulm, LA",
  "Fort Grantsboo, NJ",
  "Oak Point, WA",
  "Bowl, KS",
  "Port Pidrio, FL",
  "Park Tomb, TN",
  "MoleHill, CO",
  "Tuck, NH",
  "Teal Waters, MI",
  "Cardamom, CA",
  "Coffee, MS",
  "Long Road, AZ",
  "Cadbury, OR",
  "Fresh Winds, NV",
];
const logos = [
  "https://res.cloudinary.com/tlhcodes/image/upload/c_crop,f_auto,g_north,h_1300,q_auto,w_1300/v1644461221/pizza%20logos/pizza_logo_6_idhlzz.jpg",
  "https://res.cloudinary.com/tlhcodes/image/upload/c_crop,f_auto,g_north,h_1000,q_auto/v1644461221/pizza%20logos/pizza_logo_5_k7h2oh.jpg",
  "https://res.cloudinary.com/tlhcodes/image/upload/c_crop,f_auto,g_north,h_242,q_auto,w_242/v1644461221/pizza%20logos/pizza_logo_4_kjcodg.jpg",
  "https://res.cloudinary.com/tlhcodes/image/upload/v1644461221/pizza%20logos/pizza_logo_3_ce57zs.jpg",
  "https://res.cloudinary.com/tlhcodes/image/upload/v1644461222/pizza%20logos/pizza_logo_2_sd0wsl.png",
  "https://res.cloudinary.com/tlhcodes/image/upload/v1644461221/pizza%20logos/pizza_logo_7_m5x1un.jpg",
];
const toppings = [
  "Pepperoni",
  "Sardines",
  "Sausage",
  "Cheese",
  "Tuna",
  "Tomatoes",
  "Parmesan",
  "Red Pepper",
  "Canadian Bacon",
  "Reindeer",
  "Bacon",
  "Banana",
  "Sorghum",
  "Cinnamon",
  "Radishes",
];
const randomNumber = (range) => {
  return Math.floor(Math.random() * range);
};
const generateToppings = () => {
  let noDupesArray = [];
  while (noDupesArray.length < 8) {
    let randomDigit = randomNumber(toppings.length);
    if (!noDupesArray.includes(randomDigit)) noDupesArray.push(randomDigit);
  }

  return noDupesArray.map((index) => {
    return {
      name: toppings[index],
      price: randomNumber(200) / 100,
    };
  });
};
export const createRestaurant = () => {
  return {
    firstName: firstNames[randomNumber(firstNames.length)],
    lastName: lastNames[randomNumber(lastNames.length)],
    city: cities[randomNumber(cities.length)],
    price: randomNumber(100) / 10 + 5,
    pic: logos[randomNumber(logos.length)],
    toppings: generateToppings(),
  };
};
