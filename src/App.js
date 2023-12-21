import './App.css';
import {useState, useEffect} from 'react';


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

      <div class="block" style={{marginTop:200 - height - xWidth*.7049166488 - yWidth*.210}}>
        <figure class="top" style={{width:yWidth, height:xWidth, marginLeft:-1*xWidth/2}}></figure>
        <figure class="left" style={{width:xWidth, height:height, marginLeft:-1*xWidth, marginTop:xWidth*(.494916649) + (yWidth)*(.210), }}></figure>
        <figure class="right" style={{width:yWidth, height:height, marginLeft:0, marginTop:xWidth*(.7049166488), }}></figure>
      </div>
    </div>
  );
}

export default App;
