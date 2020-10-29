import React from 'react'
import "./LandingPage.css"


class Container extends React.Component  {
    render() {
      return(
        <div className="background-image">
          <Wrapper />
        </div>
      )
    }
  }
  
  class Wrapper extends React.Component {
    render() {
      return(
        <div className="wrapper-div">
        SALTY HACKERS
        </div>
      )
    }
  }

export default Container
  
  
