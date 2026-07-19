import assert from "node:assert/strict";
import test from "node:test";
import { getInternalDestination } from "./navigation.js";

test("only returns a different internal route", () => {
  const current = "http://localhost:3002/";
  assert.equal(getInternalDestination("/profile", current), "/profile");
  assert.equal(getInternalDestination("/#about", current), null);
  assert.equal(getInternalDestination("https://example.com", current), null);
});
