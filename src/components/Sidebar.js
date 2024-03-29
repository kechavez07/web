import React from 'react';
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
import CartItem from './CartItem';
import {SidebarContext} from '../contexts/SidebarContext';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {

  const {isOpen, handleCLose } = useContext(SidebarContext);
  const {cart, clearCart,total, itemAmount} = useContext(CartContext);
  // console.log(parseFloat(total).toFixed(2));

  return (
    <div className={` ${ isOpen ? 'right-0' : '-right-full' } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[35vw] transition-all duration-300 z-20 px-3 lg:px-[35px] flex flex-col justify-between `} >

      <div className='flex justify-between items-center py-4 border-b'>
        <div className='uppercase text-sm font-semibold'>
          Shoping Bag ({itemAmount})
        </div>
        {/* iconos */}
        <div onClick={handleCLose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          |<IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-full lg:h-[340px]  overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item) =>{
        return <CartItem item ={item} key={item.id} />;
      })}
      </div>
      <div className='flex flex-col gap-y-1 py-1 mt-1' >
        <div className=' flex w-full justify-between items-center' >
          {/* total */}
          <div className='uppercase font-semibold' >
            <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}</div>
          {/* limpiar */}
          <div onClick={clearCart} className='cursor-pointer py-2 bg-red-500 text-white w-12 h-10 flex justify-center items-center text-xl '>
            <FiTrash2/>
          </div>
        </div>
        <Link to='/' className='bg-gray-200 flex p-2 justify-center items-center text-primary w-full font-medium' > View Cart</Link>
        <Link to='/' className='bg-primary flex p-2 justify-center items-center text-white w-full font-medium' > Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
