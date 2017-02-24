import React from 'react' 
import Flexbox from 'flexbox-react'

const LandingPage = (props) => {

  // const styles = { fontFamily: 'Roboto'}
  return (
    <div >
      <Flexbox element="container" flexDirection="column" minHeight="100vh"> 

        <Flexbox styles={{top: "50%"}} justifyContent="center"> 
          <h1> never </h1> 
          <h1> take </h1> 
          <h1> me </h1> 
          <h1> alive </h1> 
        </Flexbox> 

      </Flexbox>
    </div>
   ) 
}

export default LandingPage
