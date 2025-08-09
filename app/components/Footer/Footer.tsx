"use client"


import React from 'react'
import { motion } from 'motion/react'

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[400px] relative opacity-100 bg-gray-950 "
        >
            <div className='py-[110px] flex flex-col lg:flex-row justify-center items-start px-8 lg:gap-[26rem] gap-10 '>
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='text-white text-5xl font-normal font-sans'
                >
                    Transform <br /> Roadmaps into Wins
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='bg-gray-900 py-4 px-9 rounded-xl border border-gray-100/20 font-sans text-sm'
                    >
                        Start Your Free EXO Pilot Sprint
                    </motion.button>
                </motion.div>
            </div>


        </motion.footer>
    )
}

export default Footer
