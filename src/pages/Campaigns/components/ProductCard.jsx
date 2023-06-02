import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='cursor-pointer hover:-translate-y-2 duration-500 rounded-[4px] border-[1px] border-customGray flex flex-col hover:shadow-[0_0_30px_rgba(0,0,0,.16)]'>
      <img src={product.image} alt={product.title} className="rounded-t-[4px]" />
      <div className="py-[12px] px-[16px] h-full flex flex-col gap-[12px] flex-1 justify-between ">
        <div className='flex flex-col gap-[8px]'>
        <h4 className='text-[16px] leading-[19px] font-bold'>{product.title}</h4>
        <p className='text-[14px] leading-[21px] text-[#757575]'>{product.description}</p>
        </div>
        <div className='w-full flex items-center justify-between'>
            <div className='font-bold'>{product.price} TL</div>
            <button className=' bg-customRed font-bold text-white text-[14px] leading-[16px] px-[24px] py-[12px] rounded-[90px]'>Sipariş Ver</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
