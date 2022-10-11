import React from 'react';
import WorkImg from '../assets/postman.png';
import realEstate from '../assets/realestate.jpg';
import ecommerce from '../assets/ecommerce.jpg';
import nailmeup from '../assets/nailmeup.png';
import RubberBand from 'react-reveal/RubberBand';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#000100]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-lime-600'>
            Work
          </p>
          {/* <p className='text-[#829e7e] py-6'>Check out some of my recent work</p> */}
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
            <RubberBand >
              <div
                style={{ backgroundImage: `url(${ecommerce})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
              >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 duration-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    Ecommerce
                  </span>
                  <div className='pt-8 text-center'>
                    <a href='https://github.com/Jmoreyra93/ecommerce' target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        More
                      </button>
                    </a>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              
            </RubberBand>
            <RubberBand >
              <div
                style={{ backgroundImage: `url(${nailmeup})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
              >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    Web React app
                  </span>
                  <div className='pt-8 text-center'>
                    <a href='https://github.com/Jmoreyra93/nodejs-api' target='_blank'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        More
                      </button>
                    </a>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>

            </RubberBand>

            {/* Grid Item */}

            <RubberBand >
              <div
                style={{ backgroundImage: `url(${WorkImg})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
              >
                {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                  APIS NodeJS
                  </span>
                  <div className='pt-8 text-center'>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        More
                      </button>
                    </a>
                    <a href='/'>
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>

            </RubberBand>
        </div>
      </div>
    </div>
  );
};

export default Work;
