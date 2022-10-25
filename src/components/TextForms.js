import React, { useState } from 'react'

const TextForms = (props) => {
    const[text, setText] = useState("");

    const handleUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // props.alert("pperenable", "success");   
    }

    const handleLwCase = () => {
        let newText = text.toLowerCase();
        setText(newText) ;   
        }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearCase = (event) => {
        setText("");
    }

    const handleCopy = () => {
        var text= document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    let word;
    if(text==="")
    {
        word=0;
    }
    else{
        word=text.split(" ").length;
    }
    let mins;
    if(text==="")
    {
        mins=0;
    }
    else{
        mins=0.008 * text.split(" ").length;
    }
  return (
    <>
        <div className='container' style={{color: 'white'}}>
            <h1 className='my-3'>{props.heading}</h1>
            <div className="mb-3 ">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:'white' ,color: 'white'}}></textarea>
            </div>
            <button className='btn btn-primary mx-2' onClick={handleUpCase}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-2' onClick={handleLwCase}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearCase}>Clear Text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Space</button>
         </div>

         <div className='container my-3'  style={{color: 'white'}}>
            <h2>Your Text summary</h2>
            <p>{word} words {text.length} characters</p>
            <p>{mins} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the the above textbox to preview it here"}</p>

         </div>
    </>
  )
}

export default TextForms