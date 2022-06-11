import React from 'react';
import { useDispatch } from 'react-redux';
import { increasingSort } from '../../../Redux/Reducer';

const IncreasingButton = () => {
  const dispatch = useDispatch()

  const sort = () => {
    dispatch(increasingSort())
  }

  return (
    <button className='sortingButton' onClick={sort}>
      Сортировать по возрастанию количества персонажей
    </button>
  );
};

export default IncreasingButton;