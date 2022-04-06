import React, { Component } from 'react';
import FeedbackOptions from './componets/FeedbackOptions';
import Section from './componets/Section';
import Statistics from './componets/Statictics';
import Notification from './componets/Notification';

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
    visible: this.props.visible,
  };

  handelIncrement = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
    this.setState({ visible: true });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let percent = Math.ceil(
      (100 / this.countTotalFeedback()) * this.state.good,
    );
    return percent;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handelIncrement}
          />
        </Section>

        <Section title="Statistics">
          {this.state.visible ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
