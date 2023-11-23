import sum from "../sum";

describe("sum function", () => {
  it("should sum 1 + 1", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
