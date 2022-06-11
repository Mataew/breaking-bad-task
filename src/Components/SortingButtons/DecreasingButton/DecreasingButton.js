import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreasingSort } from '../../../Redux/Reducer';

const DecreasingButton = () => {
  const dispatch = useDispatch()

  const sort = () => {
    dispatch(decreasingSort())
  }

  return (
    <button className='sortingButton' onClick={sort}>
      Сортировать по убыванию количества персонажей
    </button>
  );
};

export default DecreasingButton;