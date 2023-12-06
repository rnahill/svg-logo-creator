// Imported elements
const SVG = require("./generateSVG");
const { Square } = require("./Shape");

// Test to confirm that SVG code has been created
test("should render a 300 x 200 svg element", () => {
  const expectedSvg =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
  const svg = new SVG();
  expect(svg.render()).toEqual(expectedSvg);
});

// Test to confirm that the text element has been added
test("should append text element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
    const svg = new SVG();
    svg.setText("A", "white");
    expect(svg.render()).toEqual(expectedSvg);
  });
  
// Test to confirm that that the text and color have been added
test("should set text message and color", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    expect(svg.render()).toEqual(expectedSvg);
  });

// Test to confirm that text is less than 3 characters
test("should throw if text exceeds 3 characters", () => {
    const expectedError = new Error("Must not be more than 3 characters.");
    const svg = new SVG();
    expect(() => svg.setText("HELLO", "#333")).toThrow(expectedError);
  });

// Test to confirm that SVG file looks as expected
test("should include a shape", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>';
    const svg = new SVG();
    svg.setText("SVG", "#333");
    const square = new Square();
    square.setColor("dodgerblue");
    svg.setShape(square);
    expect(svg.render()).toEqual(expectedSvg);
  });

