import Text from "../text";
import comma from '../../assets/comma.png'
import col1Img1 from '../../assets/section-images/sec-three/one/col1-img1.png'
import col1Img2 from '../../assets/section-images/sec-three/one/col1-img2.png'
import col1Img3 from '../../assets/section-images/sec-three/one/col1-img3.png'
import col1Img4 from '../../assets/section-images/sec-three/one/col1-img4.png'

import col3Img1 from '../../assets/section-images/sec-three/three/col3-img1.png'
import col3Img2 from '../../assets/section-images/sec-three/three/col3-img2.png'
import col3Img3 from '../../assets/section-images/sec-three/three/col3-img3.png'
import col3Img4 from '../../assets/section-images/sec-three/three/col3-img4.png'
import SingleImage from "../single-image";

const col1 = [
    { 
        src: col1Img1,
        className: "h-27 w-27 top-0 right-[33%]"
    },
    { 
        src: col1Img2,
        className: "h-15 w-15 top-[40%] left-[10%]"
    },
    {
        src: col1Img3,
        className: "h-33 w-33 top-[42%] right-[10%]"
    },
    {
        src: col1Img4,
        className: "h-25 w-25 bottom-[2%] left-[5%]"
    }
]

const col3 = [
    { 
        src: col3Img1,
        className: "h-27 w-27 top-0 right-[20%]"
    },
    { 
        src: col3Img2,
        className: "h-18 w-18 top-[15%] left-[10%]"
    },
    {
        src: col3Img3,
        className: "h-22 w-22 top-[42%] left-[15%]"
    },
    {
        src: col3Img4,
        className: "h-45 w-45 bottom-[2%] right-[5%]"
    }
]

export default function SectionThree() {
  return (
      <div className="my-30 grid grid-cols-4">
        <div className="images relative">
            {col1.map((img, index) => (
                <SingleImage key={index} src={img.src} alt={img.src} className={img.className}/>
            ))}
        </div>
        <div className="quoted col-span-2 mb-15 flex flex-col gap-10 items-center">
            <div className="font-[gerbil] text-3xl md:text-4xl">
                <h1><Text text="What" bgColor="bg-[#d7eedd]" variant="capsule" width="w-[115%] top-[-20%] h-[120%] right-[-5%]"/> our customers</h1>
                <h1>say <Text text="about us" variant="scribble"/></h1>
            </div>
            <div className="text-xl cursor-pointer hover:scale-101 duration-300 rounded-[45px] py-6 w-[90%] px-15 bg-[#f3faf5] text-center">
                <p><img src={comma} alt="comma" className="inline-block mr-3 w-12" />Elementum delivered the site with in the timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable <img src={comma} alt="comma" className="inline-block ml-2 w-12 rotate-180" /></p>
            </div>
        </div>
        <div className="images relative">
            {col3.map((img, index) => (
                <SingleImage key={index} src={img.src} alt={img.src} className={img.className}/>
            ))}
        </div>

    </div>
  )
}
