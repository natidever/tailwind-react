import React from 'react'
import { apple,bill,google } from '../assets'
import styles ,{ layout} from '../style'
function Billing() {
  return (
    <section id="product" className={`${layout.sectionReverse} md:px-[50px]`}>
      <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="Billing" className="w-[100%] h-[100%] relative z-[5] "/>

      </div>
   
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>Easily control your  billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex flex-row flex-wrap">
          <img src={apple} className="w-[128px] h-[42] cursor-pointer mr-5 object-contain mt-5" />
          <img src={google} className="w-[128px] h-[42] cursor-pointer mr-5 object-contain mt-5" />
        </div>
      </div>


    </section>
  )
}

export default Billing
