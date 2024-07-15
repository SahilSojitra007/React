import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("text cleared","success");
    }

    const handleCopyClick = () => {
      var text = document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0, 99999); // For mobile devices
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");
}

  const handleExtraspacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
}

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState();

    return (
        <>
            <div className='container-fluid' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" id="mybox" onChange={handleOnChange} rows="8" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                    <button className="btn btn-primary mt-3" onClick={handleUpClick}>UpperCase</button>
                    <button className="btn btn-primary mt-3 mx-3" onClick={handleLoClick}>LowerCase</button>
                    <button className="btn btn-primary mt-3" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary mt-3 mx-3" onClick={handleCopyClick}>Copy</button>
                    <button className="btn btn-primary mt-3" onClick={handleExtraspacesClick}>Remove extra spaces</button>
                </div>
            </div>
            <div className='container-fluid' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text ? `${text.split(/\s+/).filter((element) => element.length !== 0).length} words and ${text.length} characters` : '0 words and 0 characters'}</p>
            </div>
        </>
    );
}