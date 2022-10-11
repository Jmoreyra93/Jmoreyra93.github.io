import React from 'react';
import Fade from 'react-reveal/Fade';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Mysql from '../assets/mysql.png';
import Docker from '../assets/docker.png';
import Python from '../assets/python.png';


const Skills = () => {
    return (


        <div name='skills' className='w-full h-screen bg-[#000100] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-lime-600 '>Skills</p>
                    {/* <p className='text-[#829e7e] py-4'>These are the technologies I've worked with</p> */}
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
                <Fade>
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer hover:animate-bounce hover:translate-y-6'>
                            <img className='w-20 mx-auto ' src={HTML} alt="HTML icon" />
                            
                        </div>
                    
                
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer'>
                            <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                            
                        </div>
                    
                
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer'>
                            <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                            
                        </div>
                    
                
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer'>
                            <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                            
                        </div>

                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer'>
                            <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                            
                        </div>
                            
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer'>
                            <img className='w-20 mx-auto' src={Node} alt="HTML icon" />

                        </div>
                        
                    
                
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer'>
                            <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />

                        </div>    
                    
                
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer'>
                            <img className='w-20 mx-auto' src={Mysql} alt="Mysql icon" />

                        </div>
                    
                
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer'>
                            <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                            
                        </div>
                        
                    
                
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer'>
                            <img className='w-20 mx-auto' src={Docker} alt="Docker icon" />
                            
                        </div>
                        
                    
                
                        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:cursor-pointer'>
                            <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                            
                        </div>

                </Fade>
                    
                </div>
            </div>
        </div>
    );
};

export default Skills;
