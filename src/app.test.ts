import { test, expect } from "@jest/globals";
import { app } from "./app";

test("app is undefined", () => {
  expect(app()).toBeUndefined();
});
