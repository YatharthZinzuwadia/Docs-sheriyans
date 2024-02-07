import React from 'react'
import { FaKissWinkHeart } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({ data, reference }) {
    console.log(data.tagDetails.tagColor);
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} dragTransition={{bounceStiffness: 300, bounceDamping: 10}} className='relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-7 py-8 overflow-hidden'>
        <FaKissWinkHeart/>
        <p className='text-sm leading-tight  mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full h-[75px] py-1 left-0'>
            <div className='flex items-center justify-between px-8'>
                <h5 className=''>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-200 rounded-full flex items-center justify-center'>
                    {data.close ?  <IoIosClose size="2em" color='#000'/> : <FaDownload size=".7em" color='#000'/>}
                </span>
            </div>
            {
                data.tagDetails.isOpen && (
                    <div className={`tag w-full mt-1 py-2.5 bg-${data.tagDetails.tagColor}-600 flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>
                            {data.tagDetails.tagTitle}
                        </h3>
                    </div>
                )
            }
        </div>

    </motion.div>
  )
}

export default Card


// ${}