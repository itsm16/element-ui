import { cn } from "../utils/cn";

export default function SingleImage({src, alt, className}: {src: string, alt: string, className?: string}) {
  return (
    <img className={cn("rounded-full absolute", className || "")} src={src} alt={alt} />
  )
}
