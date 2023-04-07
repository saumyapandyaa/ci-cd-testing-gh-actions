const filterByTerm = require("../src/filterByTerm");
describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];

      const urlOutput = [{ id: 1, url: "https://www.url1.dev" }, { id: 2, url: "https://www.url2.dev" }];
      const output = [{ id: 3, url: "https://www.link3.dev" }];

      expect(() => filterByTerm(input, "")).toThrow("searchTerm cannot be empty");
      expect(() => filterByTerm([], "link")).toThrow("inputArr cannot be empty");
      expect(filterByTerm(input, "link")).toEqual(output);
      expect(filterByTerm(input, "uRl")).toEqual(urlOutput);
      expect(filterByTerm(input, "LINK")).toEqual(output);
    });
  });
  