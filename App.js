import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [ascendingOrder, setAscendingOrder] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeOrderHandler = useCallback(() => {
    setAscendingOrder((prevOrder) => !prevOrder);
  }, []);

  const listItems = useMemo(() => {
    const sortedItems = [...[5, 3, 1, 10, 9]].sort((a, b) => {
      if (ascendingOrder) {
        return a - b; // Sort in ascending order
      } else {
        return b - a; // Sort in descending order
      }
    });
    return sortedItems;
  }, [ascendingOrder]);

  const buttonText = ascendingOrder ? 'Change to Descending Order' : 'Change to Ascending Order';

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeOrderHandler}>{buttonText}</Button>
    </div>
  );
}

export default App;
