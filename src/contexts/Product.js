import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import {BsPlus,bsEyefill} from 'react-icons/bs';


const Product = (product) => {
    console.log(product);

    const{ide,image,category,title,price}= product;
    return (
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>          
                <div>
                    {/*image*/}
                    <div>
                        <img src={image}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;