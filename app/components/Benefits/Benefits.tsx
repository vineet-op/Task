"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Benefits = () => {

    const data = [
        {
            heading: "Deliver Ahead of Schedule",
            subheading: "Transform 3-week development cycles into 1-day sprints.",
            image: "/appointment-02.png"
        },
        {
            heading: "Show Faster AI ROI",
            subheading: "Demonstrate measurable AI returns to executives by freeing teams from routine work.",
            image: "/zap.png"
        },
        {
            heading: "Track Every Change Made",
            subheading: "Every change tracked, every decision documented for complete visibility.",
            image: "/notebook.png"
        }
    ]


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className='text-white w-screen h-screen bg-gray-950 flex justify-center items-center'
        >

            {/* //Container */}
            <div className='w-full flex flex-col gap-14 max-w-6xl lg:flex-row'>

                {/* left side */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='flex flex-col gap-3 mx-auto max-w-md'
                >
                    <div className='text-[rgba(191,219,254,1)] font-medium text-lg py-2 '>The Benefits</div>
                    <div className='text-white font-normal text-5xl'> Stop SalesForce <br /> Delivery Blocking AI</div>
                </motion.div>


                {/* right side */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='flex flex-col gap-12 px-10 '
                >
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.6 + index * 0.2,
                                staggerChildren: 0.1
                            }}
                            className="flex items-center gap-2"
                        >
                            <motion.div
                                initial={{ scale: 0.95 }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                <Image
                                    src={item.image}
                                    alt="Thunder Icon"
                                    width={20}
                                    height={20}
                                    className="w-8 h-8 object-contain"
                                />
                            </motion.div>
                            <div className='ml-4 flex flex-col gap-3'>
                                <h3 className="text-xl font-semibold font-sans">{item.heading}</h3>
                                <p className="text-sm text-gray-300 max-w-md">{item.subheading}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Benefits
