import React from 'react'
import { logo} from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'
function Fotter() {
  return (
 <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`} >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10 md:mb-0"> 
          <img src={logo} className="w-[260px] h-[260px] object-contain" alt="" srcset="" />
          <p className={`${styles.paragraph} max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>


        <div className="flex flex-row justify-between flex-[1.5] flex-wrap md:mt-20 mt-10">
            {footerLinks.map((flinks)=>(
                <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                  <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{flinks.title}</h4>
                  <ul className="list-none mt-4 ">
                    {flinks.links.map((footerlink,index)=>(
                      <li className="font-poppins font-normal tex-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">{footerlink.name}</li>
                    ))
                    }
                  </ul>
                </div>
            ))}
            
        </div>



    </div>

<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
  <p className="font-poppins font-normal text-[15px] leading-[27px] text-dimWhite">Copyright 2021 HooBank. All Rights Reserved.</p>

  <div className="flex flex-row md:mt-0 mt-6">
    {socialMedia.map((social,index)=>(
      <img src={social.icon} alt="" srcset="" className={`w-[21px] h-[21px] object-contain  ${index !== socialMedia.length-1?'mr-4':'mr-0'}`} />
    ))}
  </div>
</div>
                    
 </section>
  )
}

export default Fotter
