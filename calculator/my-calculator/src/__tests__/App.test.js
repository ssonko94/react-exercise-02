import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App";

describe("calculator tests", () => {
  test("pressing a number shows on the sequency screen", async () => {
    render(<App />);
    const button = screen.getByTestId("7");
    expect(button).toBeDefined();
    fireEvent(button, new MouseEvent("click"));
    const sequencyScreen = screen.getByTestId("sequency-screen");
    console.log(button);

    // await waitFor(() => expect(sequencyScreen.innerHTML).toBe("7"));
  });
});
