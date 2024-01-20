import React from 'react'
import styles from '../style'
import {discount, robot} from '../assets'
import GetStarted from './GetStarted'
import Button from './Button'
function Hero() {
  return (
    <section id="home" className={`${styles.paddingY } ${styles.paddingX } md:flex-row flex-col`} >
      <div className="flex md:flex-row flex-col">

      <div className ={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">

          <img src={discount} alt="Discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span>  Discount For {" "}

    
            <span className="text-white">1 Month</span>

          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full" >
          <h1 className="flex-1 font-poppins font-semibold ss:tex-[72px] text-[52px] text-white ss:leading-[60px]">
            The Next<br className="sm:block"/> 
            <span className="text-gradient">Generation</span>{" "}<br />
          </h1>

          <div className="ss:flex hidden md:mr-4">
            <GetStarted/>
          </div>


     
        </div>
        <div>
            <h1 className="flex-1 font-poppins font-semibold ss:tex-[72px] text-[52px] text-white ss:leading-[100px]">Payment method</h1>
          </div>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.</p>
          <Button/>
      </div>


      {/* Last div */}
      <div>
        <img src={robot} alt="" className="relative w-[100%] h-[100%]" />
      </div>

      </div>


    </section>
  )
}

export default Hero
