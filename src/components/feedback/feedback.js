import React from 'react';
import Statistics from './Statistics/statistics';
class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;

    return total;
  }
  countPositiveFeedbackPercentage(value) {
    const positivePercentage = (this.state.good / value) * 100;
    return Math.round(positivePercentage);
  }

  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    const amountFeedback = this.countTotalFeedback();

    return (
      <div>
        <span>Please leave feedback</span>
        <h2>Please leave feedback</h2>

        <div>
          <button type="button" onClick={this.goodIncrement}>
            Good
          </button>
          <button type="button" onClick={this.neutralIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.badIncrement}>
            Bad
          </button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={amountFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage(
            amountFeedback,
          )}
        />
        {/* <div>
          <h2>Statistics</h2>
          <span>Good:{this.state.good}</span>
          <span>Neutral:{this.state.neutral}</span>
          <span>Bad:{this.state.bad}</span>
          <span>Total:{amountFeedback}</span>
          <span>
            Positive feedback:
            {this.countPositiveFeedbackPercentage(amountFeedback)}%
          </span>
        </div> */}
      </div>
    );
  }
}
export default Feedback;

//    //onClick={this.handleIncrement}
//<FeedbackOptions options={} onLeaveFeedback={}/>
