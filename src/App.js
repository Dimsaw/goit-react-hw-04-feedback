import React, { useState } from 'react';

import FeedbackOptions from './componets/FeedbackOptions';
import Section from './componets/Section';
import Statistics from './componets/Statictics';
import Notification from './componets/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handelIncrement = button => {
    switch (button) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const percent = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <Section title="Leave feedback, please">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handelIncrement}
        />
      </Section>

      <Section title="Statistic">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percent()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
