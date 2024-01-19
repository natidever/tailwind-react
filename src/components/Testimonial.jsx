import React from 'react'
import styles from '../style'
import { quotes } from '../assets'
import {features, feedback} from '../constants'
function Testimonial() {
  return (
   <section className='flex flex-col'>
    <div className="md:flex md:flex-row items-center sm:flex-col">
      <h2  className={`${styles.heading2}`}>What people are <br className=" " /> saying about us</h2>
      <p className={`${styles.paragraph } mt-10 mr-40`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

      <div className="flex flex-row gap-5">
      {feedback.map((feedbacks,index)=>(
         
        <div className="flex flex-col w-[330px] h-[355px] bg-black-gradient rounded-[20px] relative">
        <img src={quotes} alt="" className="w-[42px] h-[27.6pxx] mt-20 ml-5" />
        <p className={`${styles.paragraph} p-5`}>{ feedbacks.content }</p>
        <div className="flex flex-row pr-2">
          <img src={feedbacks.img} className="w-[48px] h-[48px] absolute md:bottom-10 md:left-5" />
          <div className="md:relative md:top-[40px] md:left-[100px] md:bottom-[-50px] flex flex-col text-white ">
            <h2>{feedbacks.name}</h2>
            <p>{feedbacks.title}</p>
          </div>
        </div>
      </div>
     
    

  ))
  }

      </div>
    





    

   </section>
  )
}

export default Testimonial
