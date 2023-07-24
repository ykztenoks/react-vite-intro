// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Greetings from "./components/Greetings";
import StudentCard from "./components/StudentCard";
import StudentList from "./components/StudentList";
import ReactPlayer from "react-player";
function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <Greetings firstName="Daniel" />

      <StudentList>
        <StudentCard
          name="Eva"
          week={7}
          info={{ city: "BCN", course: "WEB" }}
        />
        <StudentCard
          name="Mat"
          week={8}
          info={{ city: "MIA", course: "DATA" }}
        />
      </StudentList>

      <ReactPlayer
        url="https://vimeo.com/channels/top/22439234"
        playing
        controls
        volume="1"
      />
    </>
  );
}

export default App;
