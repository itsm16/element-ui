import Text from "../text";
import comma from '../../assets/comma.png'

export default function SectionThree() {
  return (
    <div className="my-30 grid grid-cols-4">
        <div className="images border">
            1
        </div>
        <div className="quoted col-span-2 flex flex-col gap-10 items-center">
            <div className="font-[gerbil] text-3xl md:text-4xl">
                <h1><Text text="What" bgColor="bg-[#d7eedd]" variant="capsule" width="w-[115%] top-[-20%] h-[120%] right-[-5%]"/> our customers</h1>
                <h1>say <Text text="about us" variant="scribble"/></h1>
            </div>
            <div className="text-xl rounded-[45px] py-6 w-[90%] px-15 bg-[#f3faf5] text-center">
                <p><img src={comma} alt="comma" className="inline-block mr-3 w-12" />Elementum delivered the site with in the timeline as they requested. In the end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable <img src={comma} alt="comma" className="inline-block ml-2 w-12 rotate-180" /></p>
            </div>
        </div>
        <div className="images border">
            3
        </div>

    </div>
  )
}
