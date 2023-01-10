import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock.js';

class ClockItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      city: props.city,
      offset: props.timezone,
      time: null,
      remove: props.remove,
    };
  }
  componentDidMount() {
    this.update = setInterval(() => {
      const today = new Date();
      const localoffset = -(today.getTimezoneOffset() / 60);
      const destoffset = this.state.offset;
      const offset = destoffset - localoffset;
      const date = new Date(new Date().getTime() + offset * 3600 * 1000);

      this.setState({ time: date });
    }, 1 * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.update);
  }

  showClock() {
    const { city, time, remove, id } = this.state;
    return (
      <div className="clockItem">
        <div className="clockItem__data">
          <h3>{city}</h3>
          <Clock time={time} />
        </div>
        <button className="clockItem__button" onClick={() => remove(id)}>
          x
        </button>
      </div>
    );
  }

  render() {
    const { time } = this.state;

    return <div>{time ? this.showClock() : null}</div>;
  }
}

ClockItem.propTypes = {
  city: PropTypes.string,
  offset: PropTypes.string,
  remove: PropTypes.func,
};

export default ClockItem;
