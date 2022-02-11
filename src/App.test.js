import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
    const { queryAllByRole, queryByPlaceholderText } = render(<App />);
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
});
