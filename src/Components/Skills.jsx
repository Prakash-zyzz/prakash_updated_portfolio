import React from 'react'

import HTML from "../assests/html.png"
import CSS from "../assests/css.png"
import JAVASCRIPT from "../assests/javascript.png"
import REACT from "../assests/react.png"
import GITHUB from "../assests/github.png"
import Tailwind from "../assests/tailwind.png"
import Bootstrap from "../assests/bootstrap.png"
import Firebase from "../assests/firebase.png"


const Skills = () => {
  return (
    
    <div name="skills" className='w-full h-full bg-[#0a192f] text-gray-300'>
         <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='sm:px-4'>
                <p className='text-4xl font-bold inline  border-b-4 border-pink-600' >Skills</p>
                <p className='py-4 '>// These are the technologies I've worked with </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 px-4'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mt-5 w-20 mx-auto' src={HTML} alt='/' />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mt-5 w-20 mx-auto' src={CSS} alt='/' />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mt-5 w-20 mx-auto' src={JAVASCRIPT} alt='/' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mt-5 w-20 mx-auto' src={REACT} alt='/' />
                    <p className='my-4'>REACT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mt-5 w-20 mx-auto' src={GITHUB} alt='/' />
                    <p className='my-4'>GITHUB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mt-5 w-20 mx-auto' src={Tailwind} alt='/' />
                    <p className='my-4'>TAILWIND</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mt-5 w-20 mx-auto' src={Bootstrap} alt='/' />
                    <p className='my-4'>BOOTSTRAP</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='mt-5 w-20 mx-auto' src={Firebase} alt='/' />
                    <p className='my-4'>FIREBASE</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Skills