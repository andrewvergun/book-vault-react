import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="about">
        <h1>About Book Vault</h1>
        <br />
        <p>
          Book Vault is a web application that allows users to search for books, read them online and download. <br /> The application uses the{" "}
          <a href="https://gutendex.com/" target="_blank" rel="noreferrer">
            GutenDex API
          </a>{" "}
          to fetch book data.
        </p>
       
       
      </div>
    </>
  )
}

export default About