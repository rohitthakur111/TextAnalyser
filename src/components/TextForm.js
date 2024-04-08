import {useState} from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  let handleUpClick = ()=>{
    setText(text.toUpperCase()) ;
    if(text !== ''){
      props.alert('success  ', 'Converted to Uppercase!');
    }
  }
  let handleOnchange =(event) =>{
    let lowertext = event.target.value;
    lowertext = lowertext.replace(/\s+/g, ' ');
    // lowertext = lowertext.toLowerCase();
    setText(lowertext);  
  }

  function ClearAll(){
    setText('');
  }
  let ConvertTolower = ()=>{
    let lowertext = text.toLowerCase(); 
    setText(lowertext);
    if(text !== ''){
      props.alert('success  ', 'Converted to lowercase!');
    }
   
  }
  function copyText(){
    if(text !== ''){
    document.getElementById('myBox').select();
    document.execCommand('copy');
    props.alert('success  ', ' Text copied successfully!');
    document.getSelection().removeAllRanges()
    }
   
  }
 
  return (
    <div className='container-fluid my-0'>
      <div className="container" >
        <p className="textHeading my-3 mx-1">{props.textheading} </p>
        <label htmlFor='myBox'></label>
        <textarea className="form-control" placeholder="Enter text" id="myBox" rows="8" col="20" value = {text}onChange={handleOnchange} style = {{backgroundColor:'#ffffff7a', color:props.setTheme.color}}>
        </textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
        <button onClick={ClearAll} className="btn btn-dark mx-1"> Clear Text</button>
        <button className="btn btn-danger my-2 mx-1" onClick = {ConvertTolower}>To lower Case</button>
        <button onClick={copyText} className="btn btn-dark mx-1"> Copy Text</button>
        <p className="textHeading my-3"> Your Text Summary </p>
        <p>{text==='' || text===' '? 0 :text.trimRight().trimLeft().split(' ').length } words and and {text===''? '0' :text.trimRight().length } characters</p>
        <p>{text==='' || text===' '? '0' : 0.008*text.trimRight().split(' ').length} Minutes to read</p>
        <h2> Preview Your Text</h2>
        <p>{ text==='' | text===' '? 'Enter somthing in text box to preview here': text}</p>
        </div>  
    </div>
  )
}

function ToLowerTextForm(props){
  const [text,SetText] = useState('');
  function InsertingNewText(event){
    
    //  SetText(event.target.value);  
  let lowertext = event.target.value;
  lowertext = lowertext.replace(/\s+/g, ' ');
  lowertext = lowertext.toUpperCase();
  SetText(lowertext);

  }
  let ConvertTolower = ()=>{
    let lowertext = text.toLowerCase();
    lowertext = lowertext.replace(/\s+/g, ' ')
    SetText(lowertext);
  }
  function ClearAll(){
    SetText('');
  }
  
  return (
    <div className='container-fluid'>
      <div className="container">
        <p className="textHeading my-3">{props.heading}</p>
        <textarea rows="8" className="form-control" value={text} onChange = {InsertingNewText}placeholder="Enter text"  style= {{backgroundColor:props.mode==='dark'?'rgb(75 75 75 / 55%)' : 'white', color:props.mode==='dark'?'white ' : 'black'}}></textarea>
        <button className="btn btn-danger my-3" onClick = {ConvertTolower}>To lower Case</button>
        <button onClick={ClearAll} className="btn btn-dark mx-3"> Clear Text</button>

        <p className="textHeading my-3"> Your Text Summary </p>
        <p>{text.split(' ').filter((element)=>{ return element.length!==0}).length} words and and {text.length} characters</p>
        <p>{0.008*text.split(' ').length} Minutes to read</p>
        <h2> Preview Your Text</h2>
        <p>{ text===''? 'Nothing to preview': text}</p>
      </div>
      
     
    </div>
  )
}

export {ToLowerTextForm};
ToLowerTextForm.defaultProps= {
  heading : 'Enter Text'
}

const MyButton = () =>{
  const [count, setCount] = useState(0);
  const handleOnclick = () =>{
    setCount(count+1);
  }
  return(
    <>
      <button onClick={handleOnclick} className="btn-danger mx-3">Click me {count} times</button>
    </>
  )
}
export {MyButton};