import { Component } from "react";
import Counter from "../counter";
import "./style.css";

class ClickLogic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      isPositive: true,
    };
  }
  stepState = (e) => {
    const {
      target: { value },
    } = e;
    this.setState({
      step: Number(value),
    });
  };
  switchState = () => {
    this.setState({
      isPositive: !this.state.isPositive,
    });
  };

  render() {
   let { step } = this.state;
    const { isPositive } = this.state;
    step = isPositive? step*1 : step*-1
    return (
      <div className="counterWrapper">
       <button className="btn" onClick={this.switchState}> Направление шага </button>
        <input
          className="input"
          value={this.state.value}
          onChange={this.stepState}
          type="number"
          name="number"
          placeholder="0"
        />
        
        <Counter step={step} />
      </div>
    );
  }
}

export default ClickLogic;
