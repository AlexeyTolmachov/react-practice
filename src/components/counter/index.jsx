import "./style.css";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    const { count } = this.state;
    const { step } = this.props;
    this.setState({
      count: count + step,
    });
  };

  render() {
    const { count } = this.state;

    const { step } = this.props;

    return (
      <div >
        <h2> Шаг {step} </h2>
        <h2>Результат {count} </h2>
        <button className="btn" onClick={this.increment}>
         Шагнуть
        </button>
      </div>
    );
  }
}

export default Counter;
