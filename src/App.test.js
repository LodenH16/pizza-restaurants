import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe(`app`, () => {
  it("should render two search bars", () => {
    render(<App />);
    const searchBars = screen.queryAllByRole("searchBar");
    expect(searchBars).toHaveLength(2);
  });

  it("should render multiple Restaurants", async () => {
    const { getAllByRole } = render(<App />);
    await waitFor(() => {
      const Restaurants = screen.getAllByRole("restaurant");
      expect(Restaurants.length).toBeGreaterThan(0);
    });
  });

  it("should filter Restaurants by name", async () => {
    render(<App />);
    let totalRestaurants;
    await waitFor(() => {
      totalRestaurants = screen.getAllByRole("restaurant").length;
    });
    const nameSearchBar = screen.queryByPlaceholderText("Search by name");
    fireEvent.change(nameSearchBar, { target: { value: "z" } });
    await waitFor(() => {
      const returnedSearches = screen.getAllByRole("restaurant").length;
      expect(returnedSearches < totalRestaurants).toBeTruthy();
    });
  });
  /* WORK IN PROGRESS
  it("should open toppings when plus button is clicked", async () => {
    let restaurant;
    await waitFor(() => {
      restaurant = screen.getAllByRole("restaurant")[0];
    });
  });

  it("should filter Restaurants by tag", async () => {
    render(<App />);
    let restaurant;
    await waitFor(() => {
      restaurant = screen.getAllByRole("restaurant")[0];
    });
    fireEvent.
    const nameSearchBar = screen.queryByPlaceholderText("Search by tag");
    fireEvent.change(nameSearchBar, { target: { value: "z" } });
    await waitFor(() => {
      const returnedSearches = screen.getAllByRole("restaurant").length;
      expect(returnedSearches < totalRestaurants).toBeTruthy();
    });
  });*/
});
