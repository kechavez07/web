import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import {BsBag} from 'react-icons/bs';
import Logo from '../img/logo.svg'
import {Link} from 'react-router-dom';

const Header = () => {

  const {isOpen,setIsOpen}= useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext);
  const [isActivate,setIsActivate] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 60 ? setIsActivate(true) : setIsActivate(false);
    });
  });

  return(
    <header className={`${
      isActivate ? 'bg-white py-4 shadow-md' : 'bg-none py-6'
      } fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-berween h-full' >
        <Link to={'/'}>
          <div>
            <img className='w-[40px]' src={Logo} alt=''/>
          </div>
        </Link>
        {/* cart */}
        <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
          <BsBag  className='text-2xl'/>
          <div className='bg-red-500 absolute -right-2 -boottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center' >{itemAmount}</div> 
        </div>
      </div>
    </header>
  );
};

export default Header;
