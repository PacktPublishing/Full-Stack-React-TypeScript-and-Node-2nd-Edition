import { describe, expect, it, vi } from "vitest";
import * as ApiModule from "./Api";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DisplayTodos from "./DisplayTodos";

describe("Test DisplayTodos", () => {
  it("spy on getUsersTodos", async () => {
    const user = userEvent.setup();

    const spy = vi
      .spyOn(ApiModule, "getUsersTodos")
      .mockImplementation(async (username) => {
        console.log("getUsersTodos spy called");
        return [
          {
            id: 1,
            userId: 1,
            username,
            title: "test@test.com",
          },
        ];
      });

    render(<DisplayTodos />);

    await user.type(screen.getByTestId("user-input"), "bret");
    await user.click(screen.getByText("Show Message & Data"));
    await screen.findByRole("list");

    expect(spy).toBeCalled();
    spy.mockRestore();
  });
});
