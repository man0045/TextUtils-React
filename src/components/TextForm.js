import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase","success");
    }
    const handleloClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase","success");
    }
    const handleClearClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = '';
        setText(newText)
        props.showAlert("Text get Cleared","success");
    }
    const handleCopy = () =>{
      console.log("I am copy");
      var text = document.getElementById("my-box")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is copied","success");

    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      // text.select();
      setText(newText.join(" "))
      props.showAlert("extraspaces get removed","success");
    }
    const handleOnChange = (event)=>{
        console.log("onchange");
        setText(event.target.value)
    }
    // const handleloChange = (event)=>{
    //     console.log("onchange");
    //     setText(event.target.value)
    // }
  const [text, setText] = useState('Enter Text Here');
    // console.log()
  return (
    <>
  <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value = {text} onChange ={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}id="my-box" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Conver to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleloClick}>Conver to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
  </div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} charecters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
  </>
  )
}
