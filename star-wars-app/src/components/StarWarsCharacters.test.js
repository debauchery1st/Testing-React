import React from "react";
import { render } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";
import renderer from "react-test-renderer";

test("renders", () => {
  const tst = renderer.create(<StarWarsCharacters />);
  let el = tst.toJSON();
  expect(el).toMatchSnapshot();
});
