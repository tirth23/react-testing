import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("Initial State check", () => {
	render(<Counter />);
	const heading = screen.getByText(/counter component/i);
	const checkCount = screen.getByText("Count : 0");
	const plusBtn = screen.getByText("+");
	const minusBtn = screen.getByText("-");

	expect(heading).toBeInTheDocument();
	expect(checkCount).toBeInTheDocument();
	expect(plusBtn).toBeInTheDocument();
	expect(minusBtn).toBeInTheDocument();
});

test("Inc by 1", () => {
	/*  RTL is used to render the component (render(<MyButton />)), find elements in the DOM (screen.getByText()), 
  and simulate user events (fireEvent.click()) */
	render(<Counter />);
	const plusBtn = screen.getByText("+");
	fireEvent.click(plusBtn);
	const isOnePresent = screen.getByText("Count : 1");
	/* Jest runs the test (test()), provides assertions (expect()), and ensures that the tests pass or fail */
	expect(isOnePresent).toBeInTheDocument();
});

test("Decrement by 1", () => {
	render(<Counter />);
	const minusBtn = screen.getByText("-");
	fireEvent.click(minusBtn);
	const isMinusOnePresent = screen.getByText("Count : -1");
	expect(isMinusOnePresent).toBeInTheDocument();
});
