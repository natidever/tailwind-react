import React from "react"

import './index.css';
// @ts-ignore
import styles from './style.js';

// @ts-ignore
import './constants/index.js'
// @ts-ignore
// import styles from './style.js' 
// @ts-ignore

import {  Navbar, Billing,  CardDeal,  Business,  Client,  CTA,  Stats,  Fotter,  Testimonial,  Hero,} from './components'








 

function App() {

  return (
   <div className="bg-primary w-full overflow-hidden" >

      <div className="flex justify-center items-center sm:px-16 px-6 ">
        <div className=" xl:max-w-[1280px] w-full ">
           <Navbar />
        </div>

      </div>








      <div className="bg-primary flex justify-center items-start "  >
        <div className=" xl:max-w-[1280px] w-full">
            <Hero></Hero>
        </div>
      </div>



 
      <div className = "bg-primary sm:px-16 px-6 justify-center items-start"  >
        <div className=" xl:max-w-[1280px] w-full">
          <Stats/>
          <Business/>
          
        </div>
      </div>


  
   </div>
  )
}

export default App