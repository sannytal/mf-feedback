import React from 'react';
import FeedbackDetails from './FeedbackDetails';

class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      feedback: null,
    };
  }


  render() {

    return <FeedbackDetails />;
  }
}

export default Feedback;
