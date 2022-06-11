import React from 'react';
import './episodesStyles.css'
import Episode from './Episode/Episode';
import SortingButtons from '../SortingButtons';
import WildHeisenberg from '../WildHeisenberg/WildHeisenberg';

const Episodes = () => {
  return (
    <div>
      <div className='nav'>
        <SortingButtons />
        <WildHeisenberg />
      </div>
      <div id='episodesMain'>
        <Episode />
      </div>
    </div>
  );
};

export default Episodes;