import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar.view";
import Counter from "./Counter.view";
import Person from "./Person.view";
import ColorDisplay from "./color-display";
import ColorPicker from "./color-picker";

const App = () => {
  return (
    <Box>
      <TopBar>Redux Counter + Async Ajax</TopBar>
      <ColorPicker></ColorPicker>
      <ColorDisplay> <img src="https://freesvg.org/img/1489944426.png" alt="Snowman" /></ColorDisplay>
      <Counter />
      <Person />
    </Box>
  );
};
export default App;

const Box = styled.div`
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 15rem;
`;
