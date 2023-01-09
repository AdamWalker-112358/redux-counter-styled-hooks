import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../state/slices/counter-slice";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <Box>
      <div>
        <h2>Decrement</h2>
        <Btn onClick={() => dispatch(decrement(1))}>1</Btn>
        <Btn onClick={() => dispatch(decrement(5))}>5</Btn>
        <Btn onClick={() => dispatch(decrement(10))}>10</Btn>
      </div>
      <Label>Count: {count} </Label>
      <div>
        <h2>Increment</h2>
        <Btn onClick={() => dispatch(increment(10))}>10</Btn>
        <Btn onClick={() => dispatch(increment(5))}>5</Btn>
        <Btn onClick={() => dispatch(increment(1))}>1</Btn>
      </div>
    </Box>
  );
};

export default Counter;

const Box = styled.div`
  display: flex;
  align-items: center;
  margin: 40px;

  span, h2 {
    font-weight: 800;
    font-size: 20px;
    color: #003c95;
  }
`;
const Btn = styled.button`
  border-radius: 50%;
  border: solid 2px white;
  width: 60px;
  height: 60px;
  font-size: 18px;
  font-weight: 800;
  background: #0d6efd;
  color: white;
  cursor: pointer;
  outline: none;
  margin: 2rem;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  display: grid;
  place-items: center;



  :active {
    background: ${darken(0.2, "#3a9dd1")};
  }
  :focus {
    outline: none;
  }
`;

const Label = styled.span`
  font-size: 22px;
`;

// const doIncrement = useCallback(() => dispatch(increment()), [dispatch]);
// const doDecrement = useCallback(() => dispatch(decrement()), [dispatch]);
