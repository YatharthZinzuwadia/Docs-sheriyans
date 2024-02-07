import React, { useState , useRef } from 'react'
import Card from './card'

function Foreground() {

    const ref = useRef(null);

    const data = [
     { 

         desc:"Yath Arth Zinzu Wadia YathArth ZinzuWadia",
         filesize:".9mb",
         close: true, 
         tagDetails: {
             isOpen: true, 
             tagTitle: "Upload", 
             tagColor: "emerald"
        },
            
        },
        {
            desc:"Yath Arth Zinzu Wadia YathArth ZinzuWadia",
            filesize:".8mb",
            close: true, 
            tagDetails: {
                isOpen: false, 
                tagTitle: "Download Now", 
                tagColor: "blue"
            },
            
        },
        {desc:"Yath Arth Zinzu Wadia YathArth ZinzuWadia",
        filesize:".9mb",
        close: true, 
        tagDetails: {
            isOpen: true, 
            tagTitle: "Download Now", 
            tagColor: "zinc"
       },
            
        }
    ];

  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-6'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground

   