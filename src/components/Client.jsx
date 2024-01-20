import React from 'react'
import styles from '../style'
import {clients} from "../constants"

function Client() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex flex-wrap w-full`}></div>
      {clients.map((client)=>(
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} className="sm:w-[192px] w-[100px] object-contain" alt="" srcset="" />
        </div>
      ))}
    </section>
  )
}

export default Client
