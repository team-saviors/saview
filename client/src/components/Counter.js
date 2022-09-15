import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/reducers/couterSlice';
import Button from '@mui/material/Button';
import styled from 'styled-components';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const Countbutton = styled(Button)`
    color: red;
  `;
  return (
    <div>
      <div>
        <Countbutton
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Countbutton>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
