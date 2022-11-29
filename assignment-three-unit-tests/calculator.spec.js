const calculator = require("./calculator");

describe("Unit test - check calculator function", () => {
  it("should return 20", () => {
    sumPass = calculator.sum(10, 10);
    expect(sumPass).toBe(20);
  });

  it("should return false", () => {
    sumFail = calculator.sum(2, 5);
    expect(sumFail).toBe(20);
  });

  it("should return false", () => {
    subtractPass = calculator.subtract(10, 5);
    expect(subtractPass).toBe(5);
  });

  it("should return false", () => {
    multiplyPass = calculator.multiply(10, 5);
    expect(multiplyPass).toBe(50);
  });
});
