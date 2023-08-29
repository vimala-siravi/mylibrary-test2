import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Button component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Button component/i);
  expect(linkElement).toBeInTheDocument();
});
