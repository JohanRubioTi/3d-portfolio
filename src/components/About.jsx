import React from 'react'
import { useTranslation } from "react-i18next";
import  Tilt  from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {


  return(
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={`${icon}`}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}

const About = () => {
  const { t } = useTranslation();
  return (
   <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        {t("title", { ns: "about" })}
      </p>
      <h2 className={styles.sectionHeadText}>
        {t("subtitle", { ns: "about" })}
      </h2>
    </motion.div>
    <motion.p
      variants={fadeIn("","",0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
        {t("description1", { ns: "about" })}
          <br/><b> 
        {t("description2", { ns: "about" })}
        </b>
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {t("services", {ns: "about", returnObjects: true}).map((service, index) => ( <ServiceCard key={service.title} index={index} {...service}/> ))}
    </div>
   </>
  )
}

export default SectionWrapper(About, "about")
