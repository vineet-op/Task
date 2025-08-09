"use client"

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const companyData = [
    {
        company: "US Facilities Solutions Company",
        challenge:
            "Comprehensive Salesforce org analysis covering security, performance, architecture, and compliance",
        scope: "Code quality analysis, data model review, workflow assessment, integration architecture",
        results: "40-hour assessment completed in 5 hours",
    },
    {
        company: "UK Personal Finance Management Firm",
        challenge:
            "Enable real-time KYC eligibility scoring directly within Salesforce",
        scope: "LWC development, Custom objects, Apex code, Test data, Permission sets",
        results: "60 hours of work delivered in just 8 hours",
    },
];

const CaseStudies = () => {
    return (
        <section className="w-full min-h-screen bg-gray-950 text-white flex flex-col items-center px-6 py-12">
            {/* Heading */}
            <motion.h1
                className="font-sans font-light text-4xl mb-16 py-7"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                    ease: "easeIn",
                }}
            >
                Case Studies
            </motion.h1>

            {/* Case Study Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full font-sans">
                {companyData.map((data, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            delay: index * 0.3,
                            ease: "easeIn",
                        }}
                    >
                        {/* Company Name */}
                        <h2 className="text-lg font-light">{data.company}</h2>

                        {/* Challenge */}
                        <div>
                            <p className="text-blue-400 font-normal text-base mb-1">Challenge</p>
                            <p className="text-white font-normal text-xl ">{data.challenge}</p>
                        </div>

                        {/* Scope */}
                        <div className="">
                            <p className="text-blue-400 mb-1 font-normal text-base">Scope</p>
                            <div className="text-white font-normal text-xl">
                                <div>{data.scope}</div>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="relative">
                            <p className="text-blue-400 mb-1 font-normal text-base">Results</p>
                            <p className="font-semibold tracking-tighter text-3xl max-w-sm">{data.results}</p>
                            <Image
                                src={"/redline1.png"}
                                alt="Results visualization"
                                width={85}
                                height={13}
                                style={{
                                    transform: 'rotate(0deg)',
                                    opacity: 1,
                                    borderWidth: '3px'
                                }}
                                className="absolute right-90"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CaseStudies;
