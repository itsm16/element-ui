import Text from "../text";
import blur from '../../assets/blur.svg'
import arrow from '../../assets/arrow.svg'
import firstImg from '../../assets/section-images/sec-one/sec1-img1.svg'
import secondImg from '../../assets/section-images/sec-one/sec1-img2.svg'
import string1 from '../../assets/section-images/sec-one/string1.svg'
import triangle from '../../assets/section-images/sec-one/triangle.svg'

export default function SectionOne() {

  return (
    <div className="grid grid-cols-2 h-fit mt-30 mb-20 relative px-10">
        {/* First */}
        <div className={`flex flex-col justify-center `}>
            <div className="font-[gerbil] text-4xl md:text-5l">
                <p><Text text="Tomorrow" variant="scribble"/> should</p>
                <p>be better than <Text text="today" bgColor="bg-[#d7eedd]" variant="capsule" width="w-[115%]" className="top-[-5px] md:h-12"/></p>
            </div>
            <div className="flex flex-col items-start justify-center mt-5">
                <p className="text-left">We are a team of strategists, designers communicators, researchers.</p>
                <p className="text-left">Togeather, we belive that progress only happens when you refuse to play things safe.</p>
            </div>
            <a href="#" className="font-medium flex items-center gap-2 mt-5">
                Read More
                <img src={arrow} alt="arrow" className="w-[100px]" />
            </a>
            <img src={blur} alt="blur" className="absolute right-[25%] top-[-30%] w-[60%] h-[90%] object-contain" />
        </div>
        <div className=" flex items-start justify-end">
            <img src={firstImg} alt="first" className="h-[80%] object-contain z-10"/>
        </div>

        {/* Second */}
        <div className=" flex items-start justify-start ">
            <img src={string1} alt="string2" className="absolute object-contain z-0 top-[23%] md:right-[-18%] right-0" />
            <img src={secondImg} alt="second" className="h-[80%] object-contain relative z-10" />
        </div>
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col cursor-pointer ">
                <div className="font-[gerbil] text-4xl md:text-5l ">
                <p><Text text="See" bgColor="bg-[#d7eedd]" variant="capsule" width="w-[115%]" className="top-[-5px] md:h-12"/> how we can </p>
                <p>help you <Text text="progress" variant="scribble"/></p>
            </div>
            <div className="flex flex-col items-start justify-center mt-5">
                <p className="text-left">We add a layer of fearless insights and action that allows change </p>
                <p className="text-left">makers to accelerate their progress in areas such as brand, design</p>
                <p className="text-left">digital, comms and social research.</p>

            </div>
            <a href="#" className="font-medium flex items-center gap-2 mt-5">
                Read More
                <img src={arrow} alt="arrow" className="w-[100px]" />
            </a>
            </div>
        </div>
        
    </div>
  )
}
