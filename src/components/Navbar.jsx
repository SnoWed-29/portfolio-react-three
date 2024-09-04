





function Navbar() {
  return (
    <nav className='w-full  rounded-md p-3  shadow-[inset_0_2px_4px_rgba(214,214,214,0.8)]'>
      <div className="mx-auto">
        <ul className='flex justify-between px-5 py-1'>
          <li>
            <a href="" className='font-semibold text-default p-2 text-black  rounded-md hover:bg-[#F0F4F8] transition-all duration-300'>
              Home
            </a>
          </li>
          <li>
            <a href="" className='font-semibold text-default p-2 text-black hover:bg-[#F0F4F8] transition-all duration-300'>
              Projects
            </a>
          </li>
          <li>
            <a href="" className='font-semibold text-default p-2 text-black hover:bg-[#F0F4F8] transition-all duration-300'>
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
