import React from 'react'

export default function Contact(props) {

   let myStyle = {
       color: props.mode === 'dark' ? 'white' : 'black'
    }
     
  return (

    <>
       <div className="container my-5" style={{ minHeight: "50vh" }} >
      <h3 className="mb-4 text-center" style={myStyle}>Contact Us</h3>

      <div className="text-center">
        <p className="lead" style={myStyle}>
          We'd love to hear from you! If you have any questions, suggestions, or feedback about TextUtils, feel free to reach out.
        </p>

        <p style={myStyle}><strong>Email:</strong> <a href="mailto:akashtiwari00624@gmail.com" className="text-decoration-none">akashtiwari00624@gmail.com</a></p>
        <p style={myStyle}><strong>Location:</strong> India</p>
        <p style={myStyle}><strong>Support Hours:</strong> Friday to Sunday, 9 AM – 6 PM</p>
      </div>
    </div>
    </>
  )
}
