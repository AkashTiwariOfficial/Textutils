import React, {useState} from 'react'

export default function TextForm(props) {


   const [text, setText] = useState('');

   const handleupClick = () => {
      let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to upperCase!", "success");
    };

    const handlelowClick = () => {
        let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to lowerCase!", "success");
      };

      const handleclearClick = () => {
        let newText = '';
         setText(newText);
         props.showAlert("Text Cleared!", "success");
      };

   const handleonChange = (event) => {
        setText(event.target.value);
   };

   const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!", "success");
   };

   const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "));
      props.showAlert("Removed Extra spaces!", "success");
   };

  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
      <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleonChange}  style={{backgroundColor: props.mode==='light'?'white':'grey'  ,  color: props.mode==='light'?'#042743':'white'}} rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleupClick} id="buton">Convert to upperCase</button>
          <button className="btn btn-primary mx-1" onClick={handlelowClick} id="buton">Convert to lowerCase</button>
          <button className="btn btn-primary mx-1" onClick={handleclearClick} id="buton">Clear</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy} id="buton">Copy Text</button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} id="buton">Remove Extra Spaces</button>
    </div>

       <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h2>The Summary of text</h2>
        <p>{text.split('').length} words & {text.length} characters</p>
        <p> you will take {0.008 * text.split(" ").length }  Minutes to read this above text </p>
        <h2>Preview</h2>
        <p>{text===''?'Enter Something into the Text-Box to Preview it.':text}</p>
        <p><b>Sentences </b> {text.split(". ").length - 1}</p> 
       </div>
    </>
  );
}
