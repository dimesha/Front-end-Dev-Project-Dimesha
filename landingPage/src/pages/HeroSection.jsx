import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import heroImage from'../assets/hero.png'


export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="">
    <div className="justify-center"></div>
      <div className="relative isolate  justify-center bg-no-repeat bg-cover bg-center mt-10"  style={{backgroundImage: `url(${heroImage})`}}>
        
        <div className="mx-auto max-w-md py-32 sm:py-48 lg:py-56 ml-2 lg:mx">
        
          <div className="text-left bg-gradient-to-tr from-[#4DCA79] to-[#1CBDDD] px-5 py-5">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl">
              <span>We Crush Your</span> <br></br>
              <span>Competitors Goals, And</span> <br></br>
              <span>Sales Records - Without </span><br></br>
              <span>The B.S.</span>
            </h2>
           
            <div className="mt-10 flex items-start justify-start gap-x-6">
              <a
                href="#"
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                GET FREE CONSALTATION
              </a>
             
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}
