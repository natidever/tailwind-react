import React from 'react'
import styles from '../style'
import { quotes } from '../assets'
import {feedback} from '../constants'
function Testimonial() {
  return (
   <section className='flex flex-col'>
    <div className="md:flex md:flex-row items-center sm:flex-col">
      <h2  className={`${styles.heading2}`}>What people are <br className=" " /> saying about us</h2>
      <p className={`${styles.paragraph } mt-10 mr-40`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

    <div className="flex flex-col p-7">

      {feedback.map((feedbacks,index)=>(
        feedbacks.title
        
      ))}





    

    </div>
   </section>
  )
}

export default Testimonial
