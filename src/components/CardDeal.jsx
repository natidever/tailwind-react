import React from 'react'
import styles, { layout } from '../style'
import { card } from '../assets'

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block md:hidden"/> in few easy step</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5` }>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      
      </p>
      </div>

      <div className={layout.sectionImg}>
        <img  className="w-[100%] h-[100%]" src={card} alt="card"  />
      </div>

    </section>
  )
}

export default CardDeal
