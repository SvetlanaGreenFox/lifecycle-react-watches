import React from 'react';
import PropTypes from 'prop-types';

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

      const d = new Date(new Date().getTime() + offset * 3600 * 1000);

      this.setState({ time: d });
    }, 1 * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.update);
  }

  showClock() {
    const { city, time, id, remove } = this.state;
    
    return (
      <div className="clockItem">
        <div className="clockItem__data">
          <h3>{city}</h3>
          <h4>{time.toLocaleTimeString()}</h4>
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
  id: PropTypes.number,
  city: PropTypes.string,
  offset: PropTypes.string,
  remove: PropTypes.func,
};

export default ClockItem;
