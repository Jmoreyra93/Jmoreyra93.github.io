import React from 'react'
import Bounce from 'react-reveal/Bounce';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#000100] flex justify-center items-center p-4 pt-20'>
        <Bounce>
          <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-lime-600 text-gray-300'>Contact</p>
                  {/* <p className='text-[#829e7e] py-4'>Submit the form below or shoot me an email - julianmoreyra.192@gmail.com</p> */}
              </div>
              <input className='bg-[#f1f2f3] p-2' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#f1f2f3]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#f1f2f3] p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-lime-600 hover:border-lime-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
        </Bounce>
      </div>
  )
}

export default Contact