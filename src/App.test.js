import {
  fireEvent,
  reader,
  findAllByRole,
  render,
  queryAllByRole,
  screen,
} from "@testing-library/react";
import App from "./App";

describe(`app`, () => {
  it("should render two search bars", () => {
    render(<App />);
    const searchBars = screen.queryAllByRole("searchBar");
    expect(searchBars).toHaveLength(2);
  });
  /*
  it("should render multiple Students", () => {
    const students = screen.queryAllByRole("Student");
    expect(students).toBeGreaterThanOrEqual(1);
  });*/
});
