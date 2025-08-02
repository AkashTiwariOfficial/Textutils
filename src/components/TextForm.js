import React, { useState } from "react";

export default function TextForm(props) {
   const [text, setText] = useState("");

   const handleupClick = () => {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to upperCase!", "success");
   };

   const handlelowClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lowerCase!", "success");
   };

   const handleclearClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Text-area Cleared!", "success");
   };

   const handleonChange = (event) => {
      setText(event.target.value);
   };

   const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard!", "success");
   };

   const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra spaces!", "success");
   };

   return (
      <>
         <div
            className="container"
            style={{ color: props.mode === "light" ? "#042743" : "white" }}
         >
            <h1 className="mb-4" style={{marginTop: '50px'}}>{props.heading}</h1>
            <div className="mb-3">
               <textarea
                  className="form-control"
                  id="myBox"
                  value={text}
                  onChange={handleonChange}
                  style={{
                     backgroundColor: props.mode === "light" ? "white" : "#4e73b5",
                     color: props.mode === "light" ? "#042743" : "white",
                  }}
                  rows="8"
               ></textarea>
            </div>
            <button
               className="btn btn-primary mx-1 my-1"
               disabled={text.length === 0}
               onClick={handleupClick}
               id="buton"
            >
               Convert to upperCase
            </button>
            <button
               className="btn btn-primary mx-1 my-1"
               disabled={text.length === 0}
               onClick={handlelowClick}
               id="buton"
            >
               Convert to lowerCase
            </button>
            <button
               className="btn btn-primary mx-1 my-1"
               disabled={text.length === 0}
               onClick={handleclearClick}
               id="buton"
            >
               Clear
            </button>
            <button
               className="btn btn-primary mx-1 my-1"
               disabled={text.length === 0}
               onClick={handleCopy}
               id="buton"
            >
               Copy Text
            </button>
            <button
               className="btn btn-primary mx-1 my-1"
               disabled={text.length === 0}
               onClick={handleExtraSpaces}
               id="buton"
            >
               Remove Extra Spaces
            </button>
         </div>

         <div
            className="container my-3"
            style={{ color: props.mode === "light" ? "#042743" : "white"}}
         >
            <h2>The Summary of text</h2>
            <p>
               {
                  text.split(/\s+/).filter((element) => {
                     return element.length !== 0;
                  }).length
               }{" "}
               words & {text.length} characters
            </p>
            <p>
               {" "}
               you will take{" "}
               {0.008 *
                  text.split(/\s+/).filter((element) => {
                     return element.length !== 0;
                  }).length}{" "}
               Minutes to read this above text{" "}
            </p>
            <h2>Preview</h2>
            <p>{text === "" ? "Nothing to preview!" : text}</p>
            <p>
               <b>Sentences </b>{" "}
               {
                  text.split(/[.?!\n]+/).filter((element) => {
                     return element.length !== 0;
                  }).length
               }
            </p>
            <p>
               <b>Pragraphs </b>{" "}
               {
                  text.split("\n").filter((element) => {
                     return element.length !== 0;
                  }).length
               }
            </p>
         </div>
      </>
   );
}
