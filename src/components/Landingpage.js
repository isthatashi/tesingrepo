import React from 'react'
import sparkler from "../assets/sparkler.png"
import pic_2 from "../assets/pic_2.jpg"
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import arrow from "../assets/arrow.png"
import pin from "../assets/pin.png"


const Landingpage = () => {
  return (
    <div className='md:mx-40 md:my-10  md:px-0 px-4'>
      <nav className='flex justify-between text-xl'>

        <div className="font-bold flex"> 
        <div ><img src={sparkler} alt="" className='w-[50px]' /></div>
         <div className='flex items-center'>Rupashi</div></div>
        <div className='flex items-center'>itsrupashi@gmail.com</div>


      </nav>
      <section className='my-40 flex md:flex-row flex-col md:px-20 md:py-20  p-4 rounded-3xl  bg-white  transition-all'>
        <div className='flex flex-col gap-10 md:w-5/6' >
        <div className='flex justify-center md:justify-start'> 
        <span className='flex  items-center'>
        <img src={pin} alt="" className='w-[20px]' />
            <p className='md:text-2xl text-xl   ' >
                Delhi,India
            </p>
        </span>
        </div>
            <h1 className='md:text-8xl text-4xl text-center md:text-left'>
                Hello ,I am Rupashi  
            </h1>
            <p className='text-2xl md:text-left text-center'>
                I am currently pursuing my undergraduate dregree under Electronics and computer science branch, from dronacharya college of engineering.
            </p>
            <div className='flex flex-row justify-center md:justify-start gap-10 md:text-2xl'> 

                <a href="https://github.com/isthatashi" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2'><p>Github</p><img src={arrow} alt="" className='w-[30px]' /> </a>
                <a href="https://www.linkedin.com/in/rupashi-a2b6a2261/" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2'>Linkedin <img src={arrow} alt="" className='w-[30px] ' /> </a>
               
            </div>
            </div>
            <div className='flex items-center justify-center px-4 py-10 md:p-0 '>
                <img src={pic_2} alt="" className=' rounded-full md:w-[700px] w-[300px]' />
            </div>
      </section>
      <section className='flex flex-col gap-20'>
        <h1 className='md:text-right  text-center md:text-7xl text-5xl  text-amber-950 hover:scale-90 transition-all'>EDUCATION</h1>
        <div className='text-2xl'>
        <h2 className='text-xl font-bold md:text-left text-center'>2019-2022</h2>
        <p>Secondary and Senior Secondary schooling from Kamal Public Sr. Sec. School under CBSE board</p>
        </div>
        <div className='text-2xl' >
            <h2 className='text-xl font-bold md:text-left text-center'>2022-2026</h2>
        <p>Undergraduate degree B.Tech under branch Electronics and Computer Science from Dronacharya College of Engineering, Gurugram university</p>
        </div> 

      </section>

      <section className='gap-[50px]'>
        <h1 className='text-7xl font-mono py-10 mt-20 flex justify-center text-amber-950'>SKILLS</h1>
        <div className='flex md:flex-row flex-col justify-between gap-6 md:gap-0'> 
            <div className=' card flex flex-col gap-7 px-10 py-10 shadow-2xl    rounded-2xl hover:text-xl transition-all transform hover:scale-95 text-center'>
                <p className='text-5xl'>Soft Skills</p>
                <p className='text-2xl'>Teamwork</p>
                <p className='text-2xl'>Leadership</p>
                <p className='text-2xl'>Public Speaking</p>
            </div>
            <div className=' card flex flex-col gap-7 px-10 py-10  rounded-2xl hover:text-xl transition-all transform hover:scale-95 text-center'>
                <p className='text-5xl'>Languages</p>
                <p className='text-2xl'>C language</p>
                <p className='text-2xl'>Java</p>
                <p className='text-2xl'>Python</p>
                <p className='text-2xl'>HTML</p>
                <p className='text-2xl'>CSS</p>
                

            </div>
            <div className=' card flex flex-col gap-7 px-10 py-10  rounded-2xl hover:text-xl transition-all transform hover:scale-95 text-center'>
                <p className='text-5xl'>Software</p>
                <p className='text-2xl'>Figma</p>
                <p className='text-2xl'>React js</p>
            </div>
            
        </div>
      </section>
      <footer className='flex justify-between items-center text-xl my-20'>
      <div className="font-bold flex "> 
        <div><img src={sparkler} alt="" className='w-[50px]' /></div>
         <div className='flex items-center'>Rupashi</div></div>
        <a href="https://www.linkedin.com/in/rupashi-a2b6a2261/" target="_blank" rel="noopener noreferrer" className='flex flex-row gap-2'>Linkedin </a>
      </footer>
    </div>
  )
}

export default Landingpage
