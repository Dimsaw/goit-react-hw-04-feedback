import React, { useEffect, useState } from 'react';
import FeedbackOptions from './componets/FeedbackOptions';
import Section from './componets/Section';
import Statistics from './componets/Statictics';
import Notification from './componets/Notification';

export default function App () {
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percent, setPercentage] = useState(0);

  useEffect(() => {
    setTotal(good + neutral + bad);
    setPercentage(Math.ceil(
      (100 /total()) * good,
    ))
    
  }, [good, neutral, bad, total])

 

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

  // render() {
  //   const { good, neutral, bad } = this.state;

  //   return (
  //     <>
  //       <Section title="Please leave feedback">
  //         <FeedbackOptions
  //           options={['good', 'neutral', 'bad']}
  //           onLeaveFeedback={this.handelIncrement}
  //         />
  //       </Section>

  //       <Section title="Statistics">
  //         {this.state.visible ? (
  //           <Statistics
  //             good={good}
  //             neutral={neutral}
  //             bad={bad}
  //             total={this.countTotalFeedback()}
  //             positivePercentage={this.countPositiveFeedbackPercentage()}
  //           />
  //         ) : (
  //           <Notification message="There is no feedback"></Notification>
  //         )}
  //       </Section>
  //     </>
  //   );
  // }
}

export default App;
