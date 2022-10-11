import React from 'react';
import Fade from 'react-reveal/Fade';

import ModalFront from "./ModalFront";
import ModalBack from "./ModalBack";
import ModalData from "./ModalData";
import ModalCDCI from "./ModalCDCI";
import ModalMethod from "./ModalMethod";


const Modal = () => {
    return (


        <div name='Modal' className='w-full bg-[#000100] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-lime-600 '>Knowledge</p>
                    {/* <p className='text-[#829e7e] py-4'>These are the technologies I've worked with</p> */}
                </div>
                <Fade>
                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
                        <ModalFront />
                        <ModalBack />
                        <ModalData />
                        <ModalMethod />
                        <ModalCDCI />
                    </div>
                </Fade>

            </div>
        </div>
    );
};

export default Modal;
