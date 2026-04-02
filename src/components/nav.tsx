import { useState } from "react"

export default function Nav() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex justify-between items-center mt-2 py-2 md:0 px-10">
        <a className="font-[gerbil] hover:scale-105 duration-300 cursor-pointer text-[1.2rem]">Elementum</a>
        <div className="md:flex gap-5 text-[0.9rem] hidden">
            <a className={`hover:scale-105 duration-100`} href="">Home</a>
            <a className={`hover:scale-105 duration-100`} href="">Studio</a>
            <a className={`hover:scale-105 duration-100`} href="">Services</a>
            <a className={`hover:scale-105 duration-100`} href="">Contact</a>
            <a className={`hover:scale-105 duration-100`} href="">FAQs</a>
        </div>
        <div onMouseOver={()=> setHovered(true)} onMouseLeave={()=> setHovered(false)} className="flex flex-col gap-1 w-5">
            <div className={`upper border duration-400 relative w-6 ${hovered? "rotate-180 top-[7px]" : ""} `}></div>
            <div className={`lower border duration-400 w-6 ${hovered? "rotate-90" : ""}`}></div>
        </div>
    </div>
  )
}
