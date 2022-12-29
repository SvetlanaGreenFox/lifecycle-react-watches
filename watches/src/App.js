import './App.css';
import React, { useState } from 'react';
import AddClock from './components/AddClock.js';
import ClockList from './components/ClockList.js';
import _ from 'lodash';

function App() {
	const [clock, setClock] = useState([]);

  function addTodo(value) {
    const { city, timezone } = value;
    const key = _.uniqueId();
    setClock(
      clock.concat([
        {
          city,
          timezone,
          id: key,
        },
      ])
    );
  }

  function remove(id) {
    setClock(
      clock.filter((item) => {
        return item.id !== id;
      })
    );
  }

  return (
    <div className="center">
      <AddClock onCreate={addTodo} />
      <ClockList remove={remove} list={clock} />
    </div>
  );
}

export default App;
