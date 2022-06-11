import React from 'react';
import { useSelector } from 'react-redux';
import './Styles/GlobalStyles.css'
import ButtonLoader from './Components/ButtonLoader';
import Episodes from './Components/Episodes';

const App = () => {

  const episodes = useSelector(state => state.episodes)

  return (
    <div>
      <h1>Список эпизодов Breaking Bad</h1>
      {episodes.length !== 0 ? <Episodes /> : <ButtonLoader />}
    </div>
  );
};

export default App;