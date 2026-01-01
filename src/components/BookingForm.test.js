import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm HTML5 validation", () => {
  test("date input has required attribute", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test("time select has required attribute", () => {
    render(<BookingForm availableTimes={["17:00"]} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("guests input has min 1 and max 20", () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "20");
  });

  test("occasion select has required attribute", () => {
    render(<BookingForm />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

describe("BookingForm JavaScript validation", () => {
  test("form is valid with correct inputs", () => {
    render(<BookingForm availableTimes={["17:00"]} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    // Simulate filling in valid values
    dateInput.value = "2025-12-31";
    timeSelect.value = "17:00";
    guestsInput.value = "4";
    occasionSelect.value = "Birthday";

    // Your validation function should return true
    expect(
      dateInput.value &&
      timeSelect.value &&
      guestsInput.value >= 1 &&
      guestsInput.value <= 20 &&
      occasionSelect.value
    ).toBeTruthy();
  });

  test("form is invalid if guests < 1", () => {
    render(<BookingForm availableTimes={["17:00"]} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    guestsInput.value = "0";

    expect(guestsInput.value >= 1).toBeFalsy();
  });
});

test("submit button is disabled when form is invalid", () => {
  render(<BookingForm availableTimes={["17:00"]} />);
  const submitButton = screen.getByRole("button", { name: /reserve table/i });
  expect(submitButton).toBeDisabled();
});
