import createCustomSelect from "../../src/components/custom-select";

// Test the fn that creates a custom input select.
describe("createCustomSelect()", () => {
  test("should throw an error when no array of options is given.", () => {
    expect(() => createCustomSelect()).toThrow(
      "createCustomSelect() must have an array of options.",
    );
  });

  test("should throw an error when no valueID is given.", () => {
    const errorMsg = "createCustomSelect() must have a valueID.";
    expect(() => createCustomSelect([1, 2, 3])).toThrow(errorMsg);
    expect(() => createCustomSelect([4, 5, 6, 7])).toThrow(errorMsg);
    expect(() => createCustomSelect([8, 9, 10, 11, 12])).toThrow(errorMsg);
  });

  test("should throw an error when options given is not an array.", () => {
    const errorMsg = "createCustomSelect() must have an array as options.";
    expect(() => createCustomSelect(1)).toThrow(errorMsg);
    expect(() => createCustomSelect({ o: 1 })).toThrow(errorMsg);
    expect(() => createCustomSelect("Jojo")).toThrow(errorMsg);
  });
});
