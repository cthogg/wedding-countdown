import React from "react";
import Countdown from 'react-countdown-now';
import Layout from "../components/layout";


 
// Random component
const Completionist = () => <span>You are good to go!</span>;
const weddingDay = new Date('August 19, 2019 13:00:00');
// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <h1> {days} days {hours} hours {minutes} minutes {seconds} seconds</h1>;
  }
};

const IndexPage = () => (
  <Layout>
      <Countdown
    date={weddingDay}
    renderer={renderer}
  />
  <h1> 🤵 👰  </h1>
  <h1> 🎩 🎩 🎩 🎩 </h1>
  </Layout>
)

export default IndexPage