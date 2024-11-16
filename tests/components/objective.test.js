import createObjective from "../../src/components/objective";

// Test objective.js
describe("Objective", () => {
  describe("createObjective()", () => {
    test("should throw an error when no objectiveMsg is given.", () => {
      expect(() => createObjective()).toThrow(
        "createObjective() must have an objectiveMsg.",
      );
    });
  });
});
