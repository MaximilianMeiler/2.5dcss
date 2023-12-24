import './Block.css';
const s = Math.sqrt(2)/2;
const t = (Math.sqrt(2) - 1)/2;

export default function Block ({xWidth, yWidth, height, xPos, yPos, zIndex}) {
  return (
    <div class="block" style={{marginTop: -height - xWidth*s - yWidth*t, left: xPos, top: yPos, zIndex:zIndex}}>
      <figure class="top" style={{width:yWidth, height:xWidth, marginLeft:-1*xWidth/2}}></figure>
      <figure class="left" style={{width:xWidth, height:height, marginLeft:-1*xWidth, marginTop:xWidth*(s - t) + (yWidth)*(t)}}></figure>
      <figure class="right" style={{width:yWidth, height:height, marginTop:xWidth*(s)}}></figure>
    </div>
  )
}