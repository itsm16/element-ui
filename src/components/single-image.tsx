import { cn } from "../utils/cn";

export default function SingleImage({src, alt, className}: {src: string, alt: string, className?: string}) {
  return (
    <img className={cn("rounded-full absolute cursor-pointer hover:scale-101 duration-300", className || "")} src={src} alt={alt} />
  )
}
