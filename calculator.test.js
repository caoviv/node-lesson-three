const { calculator } = require("./calculator");

describe("Unit test - check calculator function", () => {
  it("should return 20", () => {
    sumInput = calculator.sum(2, 5);
    expect(sumInput).toBe(7);
  });
});
