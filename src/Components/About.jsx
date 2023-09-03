import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
               <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold border-b-4 inline border-pink-600'>About</p>
               </div>
               <div></div>
               </div>
               <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi. I'm Prakash, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                <p>I am passionate about building excellent Websites that improves
              the lives of those around me. Highly motivated and talented Front-End Web Developer with a passion for creating visually
appealing and user-friendly websites.Seeking for an opportunity to utilize my strong
technical skills and creative mindset to contribute to the success of a dynamic organization.</p>  
                </div>
               </div>   
            
        </div>

    </div>
  )
}

export default About