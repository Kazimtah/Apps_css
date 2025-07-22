import React from 'react'
import Image from 'next/image';
import {motion} from "framer-motion";
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className='relative h-screen'> 
        <Image src="/Landing/land-splash.jpg" alt="Rentifull Platform Hero Section " fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div initial={{opacity:0, y:20}}
        animate={{opacity: 1, y:20}}
        transition={{duration: 0.8}}
        className="absolute top-1/3 transform-x-1/2 -translate-x-1/2 ">
            <div className="max-w-4xl mx-auto px-16 sm:px-12">
                <h1 className="text-5xl font-bold text-white mb-4 ">Start your Journey to find the perfect place to spend your night.</h1>
                <p className="text-xl text-white mb-8" >
                    Explore our wide range of rental properties tailared to the lifestyle and needs!
                </p>
                <div className="flex justify-center">
                    <input type="text" value="search query" onChange={() => {}} placeholder="Search by City, Neighbor and country"
                    className="w-full max-w-lg  rounded-none rounded-l-xl border-none bg-white h-12"></input>
                    <Button onClick={() =>{}} className="bg-secondary-50 text-white rounded-none rounded-r-xl border-none hover:bg-secondary-600 h-12 "></Button>
                </div>
            </div>

        </motion.div>
     </div>
  )
}

export default HeroSection;