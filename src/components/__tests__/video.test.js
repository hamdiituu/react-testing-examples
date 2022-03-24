import React from "react";
import renderer from "react-test-renderer";
import Videos from "../videos";

test("Videos Empty Renders : Video Not Found!", () => {
  const tree = renderer.create(<Videos />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Videos List Renders", () => {
  const testList = ["Udemy", "Video", "Snappy"];
  const tree = renderer.create(<Videos videoList={testList} />).toJSON();
  expect(tree).toMatchSnapshot();
});
