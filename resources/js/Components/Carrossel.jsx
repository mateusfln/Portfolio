import React from 'react'
import Marquee from 'react-fast-marquee'
import php from '../../../public/images/php.png'
import laravel from '../../../public/images/laravel.png'
import javascript from '../../../public/images/javascript.png'
import react from '../../../public/images/react.png'
import html from '../../../public/images/html.png'
import css from '../../../public/images/css.png'
import docker from '../../../public/images/docker.png'
import git from '../../../public/images/git.png'



export default function Carrossel() {
  return (
    <>
      <section className="flex justify-center items-center w-screen">
        <div className="shadow-lg shadow-zinc-50 rounded-2xl w-1/2">
          <Marquee className="rounded-2xl overflow-hidden grid bg-[#F4EFE9] max-h-48">
            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={php} className="w-20" alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={laravel} className="w-40  " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={javascript} className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={react} className="w-20  " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={html} className="w-40  " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={css} className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={docker} className="w-40 " alt="" />
            </div>

            <div className=" flex pr-10 flex-col justify-center items-center h-[350px] mx-5 ">
              <img src={git} className="w-40 " alt="" />
            </div>
          </Marquee>
        </div>
      </section>
    </>
  )
}
