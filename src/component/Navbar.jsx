import React from 'react'
import {AiOutlineMenu,AiOutlineHeart, AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import {FaRegUser} from 'react-icons/fa'
import {RiShoppingBagLine} from 'react-icons/ri'
import {MdArrowDropDown} from 'react-icons/md'
// import {GrFormAdd} from 'react-icons/g'
import Logo from '../Pictures/umo-logo.png'

function Navbar() {
    const [toggle, setToggle] = React.useState(false)
  return (
    <div className='bg-[#e4e4e4] p-4 '>
      <div className='max-w-7xl items-center flex justify-between mx-auto'>
        <div className='text-2xl font-bold'>
            <img src={Logo} />
        </div>
     
        
        <ul className='hidden md:flex gap-4 text-1xl font-jost cursor-pointer font-medium'>
            <li className='flex'><span>DEMO</span> <MdArrowDropDown className='mt-2'/></li>
            <li className='flex'>SHOP <MdArrowDropDown className='mt-2'/></li>
            <li className='flex'>PRODUCTS <MdArrowDropDown className='mt-2'/></li>
            <li className='flex'>BLOGS <MdArrowDropDown className='mt-2'/></li>
            <li className='flex'>PAGE <MdArrowDropDown className='mt-2'/></li>
        </ul>

        <ul className={`duration-300 md:hidden fixed text-black bg-white top-[60px] w-screen h-full left-[-100%]
        ${toggle ? 'left-[0]' : 'left-[-100%]'} `
        }>
            <p className='bg-[red] p-3 text-white text-center font-bold block py-2 pl-3 pr-4'>Hello</p>
            <li className='p-5'>DEMO</li>
            <li className='p-5'>SHOP</li>
            <li className='p-5'>PRODUCTS</li>
            <li className='p-5'>BLOGS</li>
            <li className='p-5'>PAGE</li>
            <li className='p-5'>FASHION 03</li>
            <li className='p-5'>USD</li>
            <li className='p-5'>MY ACCOUNT</li>
        </ul>
        
        <div>
        <ul className='hidden md:flex gap-4 text-2xl'>
            <li>
                <BsSearch/>
            </li> 
            <li>
                <FaRegUser/>
            </li>
            <li>
                <AiOutlineHeart/>
            </li>
            <li>
                <RiShoppingBagLine/>
            </li>
        </ul>
        
        
      </div>
      {/* <AiOutlineClose ()=>setToggle(!toggle) className='md:hidden block font-bold text-black '/> */}
      {
            toggle ? <AiOutlineClose onClick={()=>setToggle(!toggle)} className='md:hidden font-bold text-black cursor-pointer'/> : <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='md:hidden font-bold text-black cursor-pointer'/>
        }
      </div>
      
    </div>
  )
}

export default Navbar
