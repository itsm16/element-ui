import RoundImage from "../round-image"
import p1 from '../../assets/section-images/hero/p1.svg'
import p2 from '../../assets/section-images/hero/p2.png'
import p3 from '../../assets/section-images/hero/p3.svg'
import p4 from '../../assets/section-images/hero/p4.png'
import p5 from '../../assets/section-images/hero/p5.png'
import p6 from '../../assets/section-images/hero/p6.png'
import p7 from '../../assets/section-images/hero/p7.png'
import p8 from '../../assets/section-images/hero/p8.png'

const images: {
        variant: "left" | "right",
        image1: string,
        image2: string,
        class1?: string,
        class2?: string,
        sm1?: string,
        sm2?: string,
    }[] = [
    {
        variant: "left",
        image1: p1,
        image2: p2,
    },
    {
        variant: "right",
        image1: p3,
        image2: p4,
        class1: "top-[-25px]",
        class2: "bottom-[-25px]",
    },
    {
        variant: "right",
        image1: p5,
        image2: p6,
        sm1:"right-[-50%] top-[-150%]",
        sm2:"right-[-100%]"
    },
    {
        variant: "right",
        class1: "left-[-40px] top-[-10px]",
        class2: "right-[-10px] bottom-[-20px]",
        image1: p7,
        image2: p8,
        sm1:"",
        sm2:""
    },
]

export default function ImageSection() {
  return (
    <div className="px-10 md:py-30 py-10 pb-25 grid md:grid-cols-4 grid-cols-1 justify-center">
        {images.map((image, index) => (
            <div key={index} className="md:block hidden">
                <RoundImage 
                key={index} 
                variant={image.variant} 
                image1={image.image1} 
                image2={image.image2} 
                class1={image.class1} 
                class2={image.class2}
            />
            </div>
        ))}

        {images.slice(2,4).map((image, index) => (
            <div key={index} className="md:hidden">
                <RoundImage 
                key={index} 
                variant={image.variant} 
                image1={image.image1} 
                image2={image.image2} 
                class1={image.sm1} 
                class2={image.sm2}
            />
            </div>
        ))}
    </div>
  )
}