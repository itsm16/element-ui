import scribble from '../assets/scribble.svg'
import { cn } from '../utils/cn'

type textProps = {
  text: string;
  variant: string;
  width?: string;
  bgColor?: string;
  className?: string;
  height?: string;
}

export default function Text({ text = "text", variant = "capsule", width, bgColor, className, height }: textProps) {

  const variants = {
  capsule: cn(`inline-block absolute rounded-full ${width ? width : "w-30"} ${bgColor ? bgColor : "bg-[#fac2ea]" } ${height ? height : "h-15"} z-10 right-[-10px]`, width || ""),
  scribble: `absolute left-1/2 transform md:w-fit w-[70%] -translate-x-1/3 md:-translate-x-1/2 -translate-y-1/2 z-0`,
}
  if (variant === "scribble"){
    return (
      <span className='relative inline-block align-middle'>
        <span className={`cursor-pointer relative z-20 font-[gerbil]`}>
          {text}
        </span>
        <img
          className={cn(variants.scribble, className || "")} src={scribble} alt="scribble" 
        />
      </span>
    )
  }

  if (variant === "capsule"){
    return (
      <span className='relative inline-block align-middle font-[gerbil]'>

        <span className="relative z-20 cursor-pointer">
          {text}
        </span>
        <span className={cn(variants.capsule, className || "")}></span>
      </span>
    )
  }

  return (
    <span className='cursor-pointer'>
      {text}
    </span>
  )
}
