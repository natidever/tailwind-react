
import React from 'react'
import Button from './Button'
// // @ts-ignore
// import {features} from '../constants/index.js' 
// @ts-ignore
import {features} from '../constants/index.js'
import styles ,{layout} from '../style'
import { robot } from '../assets/index.js'

const FeatureCard=({icon,title,content,index})=>{
  return (
  <div className={`flex flex-row p-6 rounded-[30px] ${index.length-1? "mb-6":"mb-0"} feature-card ` }>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="flex items-center h-[50%] w-[50%] object-contain" /> 
      </div>


      <div className=" flex-1 flex  flex-col ml-3">
        <h4 className='text-white font-poppins font-semibold '>{title}</h4>
        <p className={`${styles.paragraph} text-[16px]`}>{content}</p>
     </div>

  </div>

  

)
}

function Business() {
  return (
    <section id="features" className={`${layout.section} `}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}> You do the business, we’ll <br className="sm:block md:hidden" /> handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[450px]`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles={`mt-10`} />
      </div>
   


      <div className={`${layout.sectionImg} flex-col `}>

        {features.map((feature,index)=>(
          <FeatureCard {...feature} key={feature.id} index={index} ></FeatureCard>
        ))} 
      </div>]
    </section>
  )
}

export default Business
