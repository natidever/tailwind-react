

import './index.css';
// @ts-ignore
import styles from './style.js';

// @ts-ignore
import './constants/index.js'
// @ts-ignore

// @ts-ignore

import {  Navbar, Billing,  CardDeal,  Business,  Client,  CTA,  Stats,  Fotter,  Testimonial,Button , Hero} from './components'








 

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
          <Billing/>
          <CardDeal/>
          <Testimonial/>
          <CTA/>
          <Fotter/>
          {/* <Client/> */}
        </div>
      </div>


  
   </div>
  )
}

export default App
