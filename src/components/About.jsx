import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000100] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <LightSpeed >

            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-lime-600'>
                About
              </p>
            </div>
          </LightSpeed >
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <LightSpeed right>

            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Julian Moreyra, nice to meet you. Please take a look around.</p>
            </div>

          </LightSpeed>
          <LightSpeed left>

            <div className='text-[#66cc33]'>
              <p>I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all the
                way to large enterprise corporations. What would you do if you had
                a software expert available at your fingertips?</p>
            </div>
          </LightSpeed>
        </div>
      </div>
    </div>
  );
};

export default About;
