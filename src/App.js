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

      <div class="block">
        <figure class="top" style={{width:yWidth, height:xWidth, }}></figure>
        {/* Width*(.7049166488) */}
        <figure class="left" style={{width:xWidth, height:height, marginLeft:-1*xWidth/2, marginTop:xWidth*(.494916649) + (yWidth)*(.210), }}></figure>
        <figure class="right" style={{width:yWidth, height:height, marginLeft:yWidth/2, marginTop:xWidth*(.914916649) - (yWidth)*(.210), }}></figure>
      </div>
    </div>
  );
}

export default App;
