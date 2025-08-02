import React from 'react'



export default function About(props) {

  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'black' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : 'black'
  }

  return (
    <div className="container my-4" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' , minHeight: "50vh"}}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" >
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong> Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Our tool allows you to quickly analyze your text for word count, character count, and more. Whether you're writing an essay, a tweet, or just a message, get instant insights to improve clarity, structure, and impact.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" aria-labelledby="headingTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This text utility tool is completely free — no hidden fees, no sign-ups. Use it anytime you want to check or improve your writing. It's built with simplicity and accessibility in mind for everyone.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Fully responsive and compatible with all modern browsers. Whether you're on Chrome, Firefox, Safari, or Edge — our app works smoothly across devices, from desktop to mobile
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
