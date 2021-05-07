import React from 'react';
import Statistics from './Statistics/statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
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

  increment = e => {
    const { name } = e.currentTarget;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const amountFeedback = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.increment} />
        </Section>
        {amountFeedback > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={amountFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage(
                amountFeedback,
              )}
            />{' '}
          </Section>
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </div>
    );
  }
}
export default Feedback;
