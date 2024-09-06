import React from 'react'

function ProjectCards({ title , desc , techs = [] }) {
  return (
    <div className="p-4 flex flex-col justify-around h-[36vh] bg-[#102240]/[0.9] text-[#C1D3F1] transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none ">
        <div className="flex justify-between">
        <span className='text-6xl'><i class="fa-regular fa-folder"></i></span>
        <div className="flex space-x-4">
          <a href="" className='text-2xl'><i className="fa-brands fa-github"></i></a>
          <a href="" className='text-2xl'><i className="fa-solid fa-up-right-from-square"></i></a>
        </div>
        </div>
        <div className="flex flex-col">
        <h2 className='text-xl py-4 font-semibold text-[#7BEDE9]'>{title}</h2>
        <p className='leading-7'>
            {desc}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            totam tempora, molestiae consequuntur ea accusantium quasi enim!
            Repellat tempore odio doloribus magnam et aspernatur explicabo
            earum, sapiente fugit, modi totam? */}
        </p>
        </div>
        <div className="flex space-x-4">
        {techs.map((tech, index) => (
          <span key={index} className='p-1 rounded-md text-white ' style={{ fontFamily: '"Baskervville SC", serif'}}>{tech}</span>
        ))}
        </div>
    </div>
  )
}

export default ProjectCards
