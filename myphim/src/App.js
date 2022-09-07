import React from 'react';
import ColorXam from './Component/ColorXam';
import ClassCompo from './Component/ClassComponent/ClassCompo';
import Bt01 from './Homework/Sesstion01/Bai01/Bt01';
import Bai02 from './Homework/Sesstion01/Bai02/Bai02';
import Bai03 from './Homework/Sesstion01/Bai03/Bai03';
import ChartBar from './Homework/Sesstion01/ChartBar1/ChartBar';
import './App.css';

const Chart = [
  {
    text: "BANDWIDTH",
    color1: "red",
    colors: "crimson",
    percentage: "20"
  },
  {
    text: "STORAGE",
    color1: "blue",
    colors: "cyan",
    percentage: "50"
  },
  {
    text: "USERS",
    color1: "green",
    colors: "lime",
    percentage: "70"
  },
  {
    text: "VISITORS",
    color1: "yellow",
    colors: "golden",
    percentage: "30"
  },
  {
    text: "EMAILS",
    color1: "lavender",
    colors: "fuchsia",
    percentage: "45"
  },
  {
    text: "BASIC",
    color1: "pink",
    colors: "hot pink",
    percentage: "80"
  },
  {
    text: "OTHERS",
    color1: "royal blue",
    colors: "navy blue",
    percentage: "37"
  },
]

function App() {
  return (
    <>
      {/* <ColorXam/> */}
      {/* <ClassCompo /> */}

      {/* <Bt01 /> */}
      {/* <Bai02 /> */}
      {/* <Bai03 /> */}

      {Chart.map((item, index) => (
        <ChartBar
          key={index}
          text={item.text}
          color1={item.color1}
          colors={item.colors}
          percentage={item.percentage}
        />
      ))}
    </>
  );
}

export default App;