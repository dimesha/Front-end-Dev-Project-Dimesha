import webImage from '../assets/web.png';
import searchImage from '../assets/search.png';

const features = [
    { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
   
  ]
 
  export default function Product() {
    return (
      <div className="bg-white">
        <div className=" mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16  lg:max-w-7xl  lg:grid-rows-1 lg:px-24">
        <div className="flex flex-col sm:flex-row gap-4  sm:gap-1 lg:gap-1">
        <img
            className="h-max w-auto"
            src={webImage}
            alt="company logo"
          />
             <div className="mx-auto gap-x-8 gap-y-10 px-4 sm:py-0 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Web & Mobile App Development</h2>
            <p className="mt-4 text-gray-500">
            Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
            </p>
            <div className="mt-10 flex items-start justify-start gap-x-6">
              <a
                href="#"
                className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                LEARN MORE
              </a>
             
            </div>
          </div>
          </div>
         
          
        </div>



        <div className=" mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16  lg:max-w-7xl  lg:grid-rows-1 lg:px-24">
        <div className="flex flex-col sm:flex-row gap-4  sm:gap-1 lg:gap-1">
        <img
            className="h-max w-auto  md:hidden lg:hidden sm:block"
            src={searchImage}
            alt="company logo"
          />
             <div className="mx-auto gap-x-8 gap-y-10 px-4 sm:py-0 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Digital Strategy Consulting</h2>
            <p className="mt-4 text-gray-500">
            Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
            </p>
            <div className="mt-10 flex items-start justify-start gap-x-6">
              <a
                href="#"
                className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                LEARN MORE
              </a>
             
            </div>
          </div>
          <img
            className="h-max w-auto hidden  md:block lg:block "
            src={searchImage}
            alt="company logo"
          />
          
          </div>
         
          
        </div>

      </div>

      
    )
  }
  