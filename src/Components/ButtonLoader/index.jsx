import React from 'react';
import { useDispatch } from 'react-redux';
import { episodesLoad } from '../../Redux/Reducer';
import './buttonStyles.css'

const ButtonLoader = () => {

  const dispatch = useDispatch()

  const doFetch = () => {
    dispatch(episodesLoad())
  }

  return (
    <button id='buttonLoader' onClick={doFetch}>
      Загрузить эпизоды
    </button>
  );
};

export default ButtonLoader;