import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe(`app`, () => {
  it("should render two search bars", () => {
    render(<App />);
    const searchBars = screen.queryAllByRole("searchBar");
    expect(searchBars).toHaveLength(2);
  });

  it("should render multiple Students", async () => {
    const { getAllByRole } = render(<App />);
    await waitFor(() => {
      const students = screen.getAllByRole("student");
      expect(students.length).toBeGreaterThan(0);
    });
  });

  it("should filter students by name", async () => {
    const { queryAllByRole, queryByPlaceholderText } = render(<App />);
    const nameSearchBar = screen.queryByPlaceholderText("Search by name");
    fireEvent.change(nameSearchBar, { target: { value: "z" } });
    await waitFor(() => {
      expect(screen.getAllByRole("student").length).toBe(1);
    });
  });
});
