import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";

test("should be render details text", () => {
  render(<DetailPage />);
  const Detail = screen.getByTestId("getTextByTitle");
  expect(Detail).toBeInTheDocument();
});

test("should be render calender picture", () => {
  render(<DetailPage />);
  const Calendar = screen.getByAltText("calendar");
  expect(Calendar).toBeInTheDocument();
});
