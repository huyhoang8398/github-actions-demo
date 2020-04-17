const { dayOfTheWeek } = require("./app");

test("getDay returns the long-format day of the week", () => {
  const day = dayOfTheWeek(new Date("4/18/2020"));
  expect(day).toBe("Saturday");
});
