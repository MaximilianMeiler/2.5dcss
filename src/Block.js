import './Block.css';

export default function Block ({xWidth, yWidth, height}) {
  return (
    <div class="block" style={{marginTop:200 - height - xWidth*.7049166488 - yWidth*.210}}>
      <figure class="top" style={{width:yWidth, height:xWidth, marginLeft:-1*xWidth/2}}></figure>
      <figure class="left" style={{width:xWidth, height:height, marginLeft:-1*xWidth, marginTop:xWidth*(.494916649) + (yWidth)*(.210)}}></figure>
      <figure class="right" style={{width:yWidth, height:height, marginLeft:0, marginTop:xWidth*(.7049166488)}}></figure>
    </div>
  )
}