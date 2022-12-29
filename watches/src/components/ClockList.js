import React from 'react';
import ClockItem from './ClockItem.js';
import PropTypes from 'prop-types';

function ClockList(props) {
  const { remove, list } = props;

  function removeItem(id) {
    remove(id);
  }
  console.log(list);
  return (
    <div className="clockList">
      {list.length
        ? list.map((item) => (
            <ClockItem
              id={item.id}
              city={item.city}
              timezone={item.timezone}
              remove={removeItem}
            />
          ))
        : null}
    </div>
  );
}

ClockList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  remove: PropTypes.func.isRequired,
};

export default ClockList;
