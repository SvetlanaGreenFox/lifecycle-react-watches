import React from 'react';

function Clock(props) {
  const { time } = props;
  const hours = ((time.getHours() + 11) % 12) + 1;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;

  return (
    <div className="clock">
      <div className="wrap">
        <span
          style={{ transform: `rotate(${hour}deg)` }}
          className="hour"
        ></span>
        <span
          style={{ transform: `rotate(${minute}deg)` }}
          className="minute"
        ></span>
        <span
          style={{ transform: `rotate(${second}deg)` }}
          className="second"
        ></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default Clock;
