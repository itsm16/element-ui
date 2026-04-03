import semicircle from '../../assets/semi-circle.svg'
import arrows from '../../assets/section-images/sec-four/curved-arrows.svg'

const footerItems = [
  { title: 'Company', items: ['Home', 'Studio', 'Service', 'Blog'] },
  { title: 'Terms & Privacy', items: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'] },
  { title: 'Follow Us', items: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'] },
  { title: 'Contact', items: ['1498w Fluton ste, STE 2D Chicgo, IL 63867. (123) 456789000', 'info@elementum.com'] },
]

export default function SectionFour() {
  return (
    <div className="grid md:grid-rows-2 h-max gap-5 bg-[#D7EEDD] md:py-25 py-10 relative w-[full] ">
        <img src={arrows} alt="arrows" className="absolute top-0 md:left-[38%] left-15" />
        <div className="text-center h-max flex flex-col items-center gap-2 max-w-[1366px] mt-22 place-self-center">
          <div className='self-end relative w-full'>
            <img src={semicircle} alt="semicircle" className="absolute md:right-[-40%] md:top-12 md:w-30 w-12 right-[-20px]"/>
          </div>
            <h1 className="text-4xl md:text-5xl font-[gerbil]">Subscribe to</h1>
            <h1 className="text-4xl md:text-5xl font-[gerbil]">our newsletter</h1>
            <p>To make your stay special and even more memorable</p>
            <button className="bg-black text-white px-4 py-2 mt-4 rounded-full cursor-pointer hover:scale-105 duration-300">Subscribe Now</button>
        </div>

        {/* footer */}
        <div className='mt-10 pb-10 px-20 h-full'>
          <div className='grid md:grid-cols-4 gap-10 md:gap-0 border-t pt-15'>
            {footerItems.map((item, index) => (
              <div key={index} className=''>
                <h2 className='text-xl font-[gerbil]'>{item.title}</h2>
                <ul className='flex flex-col gap-2 mt-5'>
                  {item.items.map((item, index) => (
                    <li className='cursor-pointer hover:scale-102 duration-300' key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className='text-center text-sm mt-15'>&copy; {new Date().getFullYear()} Elementum. All rights reserved.</p>
    </div>
  )
}
