import React from 'react'
import { personalInfo } from '../data'
import { motion } from "framer-motion";
import { smoothEase, sectionViewport } from "../utils/motion";

function Info() {
  return (
    <>
    {personalInfo.map(({id, title, description}, index) => {
      return (
        <motion.li
          className="info_item"
          key={id ?? title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={sectionViewport}
          transition={{
            duration: 0.68,
            delay: index * 0.04,
            ease: smoothEase,
          }}
        >
           <span className='info_title'>{title}</span>
           <span className="info_description">{description}</span>
        </motion.li>
      )
    })}
    </>
  )
}

export default Info
