import Text from "../text";
import blur from '../../assets/blur.svg'
import arrow from '../../assets/arrow.svg'
import firstImg from '../../assets/section-images/sec-one/sec1-img1.svg'
import secondImg from '../../assets/section-images/sec-one/sec1-img2.svg'
import string1 from '../../assets/section-images/sec-one/string1.svg'
import triangle from '../../assets/section-images/sec-one/triangle.svg'
import rect from '../../assets/section-images/sec-one/rect.svg'

export default function SectionOne() {

  return (
    <div className="grid grid-cols-2 h-fit mt-30 mb-20 relative px-10 md:gap-0 gap-8">
        {/* First */}
        <div className={`flex flex-col justify-center `}>
            <div className="font-[gerbil] text-2xl md:text-4xl lg:text-4xl">
                <p><Text text="Tomorrow" variant="scribble"/> should</p>
                <p>be better than <Text text="today" bgColor="bg-[#d7eedd]" variant="capsule" width="md:w-[115%] w-[120%]" className="md:top-[-5px] md:h-12" height="h-10 md:top-[-3px] top-[-5px]"/></p>
            </div>
            <div className="flex flex-col items-start justify-center mt-5 z-10 text-sm">
                <p className="text-left">We are a team of strategists, designers communicators, researchers.</p>
                <p className="text-left">Togeather, we believe that progress only happens when you refuse to play things safe.</p>
            </div>
            <a href="#" className="font-medium flex items-center gap-2 mt-5">
                Read More
                <img src={arrow} alt="arrow" className="w-[100px]" />
            </a>
            <img src={blur} alt="blur" className="absolute right-[25%] top-[-30%] w-[60%] h-[90%] object-contain" />
        </div>
        <div className=" flex items-start justify-end">
            <img src={firstImg} alt="first" className="md:h-[80%] h-[60%] object-contain z-10"/>
            <img src={rect} alt="rect" className="absolute size-40 right-0 md:size-40 md:right-[12px] object-contain" />
        </div>

        {/* Second */}
        <div className=" flex items-start justify-start ">
            <img src={string1} alt="string2" className=" absolute object-contain z-0 top-[23%] md:right-[-18%] right-0" />
            <img src={secondImg} alt="second" className="md:h-[80%] h-[60%] object-contain relative z-10" />
            <img src={triangle} alt="tri1" className="absolute md:left-6 left-0 size-45 object-contain" />
            <img src={triangle} alt="tri2" className="absolute md:left-[25%] md:bottom-20 bottom-[23%] left-[30%] z-10 size-20 md:size-45 object-contain" />
        </div>
        <div className="flex flex-col justify-center items-center z-10">
            <div className="flex flex-col cursor-pointer ">
                <div className="font-[gerbil] text-2xl md:text-4xl lg:text-4xl ">
                <p><Text text="See" bgColor="bg-[#d7eedd]" variant="capsule" width="md:w-[120%] w-[135%]" className="md:top-[-7px] top-[-5px]" height="md:h-12 h-10 right-[-5px]"/> how we can </p>
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
