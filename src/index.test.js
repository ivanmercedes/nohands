import hello from ".";

describe("it should say hello", () => {
  it("should greet 'Ivan'", () => {
    expect(hello()).toBe("Hello, Ivan");
  });

  it("should greet 'Dalia'", () => {
    expect(hello("Dalia")).toBe("Hello, Dalia");
  });
});
