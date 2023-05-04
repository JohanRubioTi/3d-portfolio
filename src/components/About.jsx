import React from 'react'
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
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >

        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-2 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
         <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
         <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
   <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("","",0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I'm a skilled web developer with expertise in JavaScript, AI, React.js, Next.js, Vue.js and Three.js.
      As an informatics engineer, I bring a creative approach to problem-solving and strive to deliver
      the best results for your business needs. My focus is on collaborating closely with clients to
      ensure efficient development of user-friendly solutions that meet their unique requirements.
      With my commitment and passion for delivering high-quality workmanship, I'm confident that together
      we can turn your ideas into reality.<br/><b> Let's build something amazing! </b>
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => { <ServiceCard key={service.title} index={index} {...service}/> })}
    </div>
   </>
  )
}

export default SectionWrapper(About, "about")
