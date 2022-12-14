import hero from '../assets/images/hero.png'
const Hero = () => {
  return (
    <main className='max-w-[1640px] mx-auto p-4'>
        <section className='max-h-[500px] relative'>
            {/* overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-600'>Best Service</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>You can Get!</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={hero} alt="Hero" />
        </section>

    </main>
  )
}

export default Hero