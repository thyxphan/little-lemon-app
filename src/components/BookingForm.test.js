import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders Choose date label", () => {
  render(<BookingForm availableTimes={[]} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
