import RoundImage from "../round-image"

const images: {
        variant: "left" | "right",
        image1: string,
        image2: string,
        class1?: string,
        class2?: string,
    }[] = [
    {
        variant: "left",
        image1: "",
        image2: "",
    },
    {
        variant: "right",
        image1: "",
        image2: "",
        class1: "top-[-25px]",
        class2: "bottom-[-25px]",
    },
    {
        variant: "right",
        image1: "",
        image2: "",
    },
    {
        variant: "right",
        class1: "left-[-40px] top-[-10px]",
        class2: "right-[-10px] bottom-[-20px]",
        image1: "",
        image2: "",
    },
]

export default function ImageSection() {
  return (
    <div className="px-10 py-30 grid grid-cols-4 justify-center">
        {images.map((image, index) => (
            <RoundImage 
                key={index} 
                variant={image.variant} 
                image1={image.image1} 
                image2={image.image2} 
                class1={image.class1} 
                class2={image.class2}
            />
        ))}

        
    </div>
  )
}