import './App.css';
import Block from './Block';
import {useState} from 'react';


function App() {
  const [xWidth, setXWidth] = useState(20)
  const [yWidth, setYWidth] = useState(20)
  const [height, setHeight] = useState(20)

  return (
    <div>
      <div>
        <input type='range' min={5} max={100} defaultValue={xWidth} onChange={(v) => setXWidth(v.target.valueAsNumber)}></input>
        <input type='range' min={5} max={100} defaultValue={yWidth} onChange={(v) => setYWidth(v.target.valueAsNumber)}></input>
        <input type='range' min={5} max={100} defaultValue={height} onChange={(v) => setHeight(v.target.valueAsNumber)}></input>
      </div>

      <Block xWidth={xWidth} yWidth={yWidth} height={height}/>
    </div>
  );
}

export default App;
