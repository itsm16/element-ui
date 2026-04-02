import { cn } from "../utils/cn"

export default function RoundImage({class1, class2, variant, image1, image2}: {class1?: string, class2?: string, variant: 'left' | 'right', image1: string, image2: string}) {
    const variants = {
        right: {
            class1: cn("top-8 relative", class1 || ""),
            class2: cn("bottom-[-55%] right-[20%] absolute", class2 || "")
        },
        left: {
            class1: cn("left-[0%] bottom-[-70%] relative", class1 || ""),
            class2: cn("top-[50%] right-[20%] absolute", class2 || "")
        }
    }


  return (
    <div>
        <div className="w-full h-full relative">
        <img src={image1} alt="" className={`w-[150px] h-[150px] hover:z-10 hover:scale-105 duration-300 object-cover bg-red-200 rounded-full  border-5 border-white ${variant === 'left' ? variants.left.class1 : variants.right.class1}`} />
        <img src={image2} alt="" className={`w-[150px] h-[150px] object-cover hover:scale-105 duration-300 bg-gray-200 rounded-full border-white border-5 ${variant === 'left' ? variants.left.class2 : variants.right.class2}`} />
        </div>
    </div>
  )
}
