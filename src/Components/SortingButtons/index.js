import React from 'react';
import DecreasingButton from './DecreasingButton/DecreasingButton';
import IncreasingButton from './IncreasingButton/IncreasingButton';
import './SortingButtonsStyles.css'

const SortingButtons = () => {
  return (
    <div>
     <DecreasingButton />
     <IncreasingButton />
    </div>
  );
};

export default SortingButtons;