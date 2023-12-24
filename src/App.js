import './App.css';
import Block from './Block';
import {useEffect, useState} from 'react';


function App() {
  const [xWidth, setXWidth] = useState(20)
  const [yWidth, setYWidth] = useState(40)
  const [height, setHeight] = useState(60)
  const [xCount, setXCount] = useState(3);
  const [yCount, setYCount] = useState(3);

  return (
    <div>

      <div className='area'>
        {[...Array(xCount)].map((v, i) => {
          return [...Array(yCount)].map((w, j) => {
            return (
              <Block xWidth={xWidth} yWidth={yWidth} height={1 + height*( i + j)} xPos={805 - i*xWidth*Math.cos(22.5 / 180 * Math.PI) + j*yWidth*Math.cos(22.5 / 180 * Math.PI)} yPos={805 - i*xWidth*Math.sin(22.5 / 180 * Math.PI) - j*yWidth*Math.sin(22.5 / 180 * Math.PI)} zIndex={-i - j}/>
            )
          })
        })}
      </div>





      
      
      
      <div>
        <input type='range' min={5} max={100} defaultValue={xWidth} onChange={(v) => setXWidth(v.target.valueAsNumber)}></input>
        <input type='range' min={5} max={100} defaultValue={yWidth} onChange={(v) => setYWidth(v.target.valueAsNumber)}></input>
        <input type='range' min={5} max={100} defaultValue={height} onChange={(v) => setHeight(v.target.valueAsNumber)}></input>
        <input type='range' min={5} max={100} defaultValue={xCount} onChange={(v) => setXCount(v.target.valueAsNumber)}></input>
        <input type='range' min={5} max={100} defaultValue={yCount} onChange={(v) => setYCount(v.target.valueAsNumber)}></input>
      </div>
    </div>
  );
}

export default App;
