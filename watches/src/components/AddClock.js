import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddClock({ onCreate }) {
  const [value, setValue] = useState([]);

  function checkTimeZone(value) {
    if (Number(value) >= -12 && Number(value) <= 12) return true;
    return false;
  }

  function submitHandler(event) {
    event.preventDefault();

    if (checkTimeZone(value.timezone)) {
      onCreate(value);
    } else {
      alert('Проверьте правильность введённых данных');
    }
    setValue({ city: '', timezone: '' });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="inputbox">
        <input
          onChange={(event) =>
            setValue({ ...value, [event.target.name]: event.target.value })
          }
          value={value.city}
          name="city"
          type="text"
          required="required"
        />
        <span>Город</span>
      </div>
      <div className="inputbox">
        <input
          onChange={(event) =>
            setValue({ ...value, [event.target.name]: event.target.value })
          }
          value={value.timezone}
          name="timezone"
          type="text"
          required="required"
        />
        <span>Временной пояс</span>
      </div>
      <div className="buttonbox">
        <button type="submit" className="inputbox inputbox__button">
          Создать
        </button>
      </div>
    </form>
  );
}

AddClock.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default AddClock;