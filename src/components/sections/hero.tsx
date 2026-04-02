import Text from "../text";
import curves from "../../assets/curves.svg";
import ImageSection from "./image-section";

export default function Hero() {
  return (
    // p tag for different line tag , since divided in 3 lines
    // inline one to modify and add between 
    // modification is adding colour capsules
    <>
      <div className="font-[gerbil] text-5xl md:text-6xl flex-col flex text-center md:pt-36 pt-10 md:leading-[1.5] leading-[1.1]">
        <p className="z-20 cursor-pointer">The <Text text="thinkers" className="bottom-[-8.5px]" variant="scribble"/> and</p>
        <p className="z-20 cursor-pointer">doers were <Text text="changing" variant="capsule" width="w-[72%] top-[8px] h-[85%]"/></p>
        <p className="z-20 cursor-pointer">the <Text text="status" variant="capsule" bgColor="bg-[#d7eedd]" width="w-[115%] top-[5px] right-[-15px] h-[85%]"/> Quo with</p>
        <img src={curves} alt="curves"
          className="absolute md:w-25 w-12 left-0 md:bottom-50 bottom-95"
        />
      </div>
      <div className="mt-5 px-10 md:px-0">
        <p className="text-center">We are a team of strategists, designers communicators, researchers. Togeather,</p>
      <p className="text-center px-2 md:px-0">we belive that progress only hghappens when you refuse to play things safe.</p>
      </div>
      <ImageSection/>
    </>
  )
}
