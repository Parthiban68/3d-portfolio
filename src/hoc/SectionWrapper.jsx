import React from 'react'
import{motion} from 'framer-motion';
import {staggerContainer} from '../utils/motion';
import { styles } from '../style';


const SectionWrapper = (Component, idName) =>
function Hoc(){
    return(
        <motion.section variants={staggerContainer()} initial="hidden" whileInView="show" viewport={{once:true, amount:0.25}} className={`${styles.padding} max-w-7x1 mx-auto relative z-0`}>
           {/* <span className='hash-span' id={idName}>&nbsp;</span> */}
            <Component/>
        </motion.section>
    )
}
export default SectionWrapper