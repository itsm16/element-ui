import string2 from '../../assets/section-images/sec-two/string2.svg'
import logo from '../../assets/section-images/sec-two/logo.png'
import Text from '../text'
import arrow from '../../assets/arrow.svg'

const tableData = [
    {
        h3: 'Office of multiple interest content',
        h1: 'Colaborative & partnership'
    },
    {
        h3: 'The hanger US Air force digital experimental',
        h1: 'We talk about our weight'
    },
    {
        h3: 'Delta faucet content, social, digital',
        h1: 'Piloting digital confidence'
    }
]

export default function SectionTwo() {
    return (
        <div className='px-10 h-max my-15'>
            <div className='relative font-[gerbil] mb-15 text-4xl md:text-5xl'>
                <p>What we <Text text='can' variant='capsule' bgColor='bg-[#d7eedd]' height='md:h-13 h-10 md:top-[-3px] z-10' width='w-[120%]' /></p>
                <p><Text text='offer' variant='scribble' className='z-10' /> you!</p>
                <img src={string2} alt="string2" className="absolute md:right-[-15%] right-[-30%] bottom-[-15%] w-[70%] z-0" />
            </div>
            <div>
                {tableData.map((item, index) => (
                    <div className={`cursor-pointer hover:scale-101 duration-300 grid md:grid-cols-4 grid-cols-2 items-center gap-5 border-[#B1B1B1] py-5 ${index === 0 ? 'border-t border-b' : 'border-b'}`} key={index}>
                        <h3 className='w-[200px] cursor-pointer'>{item.h3}</h3>
                        <h1 className='text-4xl font-[gerbil] w-[600px] col-span-2 cursor-pointer md:block hidden'>{item.h1}</h1>
                        <a href="" className='flex justify-center '>
                            <img src={arrow} alt="arrow" className='w-[100px]'/>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
