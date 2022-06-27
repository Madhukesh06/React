import { useState } from "react";
import Slide from "./Components/Slide";
import "./styles.css";

// set this as the
const data = [
  {
    id: 1,
    title: "Intro to React",
    description: "React is a Javascript UI library"
  },
  {
    id: 2,
    title: "Intro to Props",
    description: "Props are just properties"
  },
  {
    id: 3,
    title: "Sate management",
    description: "Learn how to manage state"
  }
];
let a = 0;
export default function App() {
  const [dataSet, setData] = useState(data[a]);

  function moveNext() {
    a = a + 1;
    setData(data[a]);
  }

  function movePrev() {
    a = a - 1;
    setData(data[a]);
  }

  return (
    <div className="App">
      <h1 data-testid="header">Slides</h1>
      <Slide title={dataSet.title} description={dataSet.description} />
      <button onClick={movePrev} data-testid="prev" disabled={a === 0}>
        Prev
      </button>
      <button
        onClick={moveNext}
        data-testid="next"
        disabled={a === data.length - 1}
      >
        Next
      </button>
    </div>
  );
}
