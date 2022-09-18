import React from 'react';
// import ColorXam from './Component/ColorXam';
// import ClassCompo from './Component/ClassComponent/ClassCompo';
// import Bt01 from './Homework/Sesstion01/Bai01/Bt01';
// import Bai02 from './Homework/Sesstion01/Bai02/Bai02';
// import Bai03 from './Homework/Sesstion01/Bai03/Bai03';
// import ChartBar from './Homework/Sesstion01/ChartBar1/ChartBar';
// import Header from './Component/ClassComponent/Header';
// import Even from './Component/ClassComponent/Even';
// import Like from './Homework/Sesstion03/Bai01/Like';
// import LikeButton from './Component/LikeButton/Button';
// import Button from './Component/LikeButton/Button';
// import B01like from './Component/LikeButton/B01like';

// import Like from './Homework/Sesstion03/Bai01/Like';
// import Star from './Homework/Sesstion03/Bai02/Star';

// Session06
// import Form02 from './Homework/Sesstion06/Bai02/Form02';
import Form03 from './Homework/Sesstion06/form03/Form03';

import LikeButton from './Homework/Sesstion03/Bai01/LikeButton';
import Home from './Component/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Login from './Component/Login/Login';

import './App.css';

// const Chart = [
//   {
//     text: "BANDWIDTH",
//     color1: "red",
//     colors: "crimson",
//     percentage: "20"
//   },
//   {
//     text: "STORAGE",
//     color1: "blue",
//     colors: "cyan",
//     percentage: "50"
//   },
//   {
//     text: "USERS",
//     color1: "green",
//     colors: "lime",
//     percentage: "70"
//   },
//   {
//     text: "VISITORS",
//     color1: "yellow",
//     colors: "#ff0ff0",
//     percentage: "30"
//   },
//   {
//     text: "EMAILS",
//     color1: "lavender",
//     colors: "fuchsia",
//     percentage: "45"
//   },
//   {
//     text: "BASIC",
//     color1: "pink",
//     colors: "#ff0000",
//     percentage: "80"
//   },
//   {
//     text: "OTHERS",
//     color1: "#ffd444",
//     colors: "#acddda",
//     percentage: "37"
//   },
// ]



function App() {
  return (
    <>
      {/* <ColorXam/> */}
      {/* <ClassCompo /> */}

      {/* <Bt01 /> */}
      {/* <Bai02 /> */}
      {/* <Bai03 /> */}

      {/* {Chart.map((item, index) => (
        <ChartBar
          key={index}
          text={item.text}
          color1={item.color1}
          colors={item.colors}
          percentage={item.percentage}
        />
      ))} */}

      {/* <Header /> */}

      {/* <Even /> */}

      {/* <LikeButton /> */}
      {/* <Like /> */}

      {/* <LikeButton /> */}

      {/* <Button /> */}

      {/* <B01like /> */}
      {/* <Like /> */}
      {/* <Star /> */}


      {/* <Form02 /> */}
      <Form03 />



      {/* <Login /> */}
      {/* <BrowserRouter>
        <Link to="/">HOME</Link>
        <Link to="/form">LinkButtom</Link>
        <Link to="/Login">Login</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index path="/form" element={<LikeButton />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}



    </>
  );
}

export default App;