import React from 'react'
import CategoryCard from './components/CategoryCard'

const StartOrder = () => {

    const categories = [
        {
            id:1,
            title: "Kampanyalar",
            image: "https://pizzahut.com.tr/CMSFiles/Image/Menu/kampanyalar_637637863210349988.png"
        },
        {
            id:2,
            title: "Pizzalar",
            image: "https://pizzahut.com.tr/CMSFiles/Image/Menu/pizzalar_637637863328623699.png"
        },
        {
            id:3,
            title: "WingStreet",
            image: "https://pizzahut.com.tr/CMSFiles/Image/Menu/wingstreet.png"
        },
        {
            id:4,
            title: "Yan Ürünler",
            image: "https://pizzahut.com.tr/CMSFiles/Image/Menu/baslangiclar_637643028105090638.png"
        },
        {
            id:5,
            title: "Tatlılar",
            image: "https://pizzahut.com.tr/CMSFiles/Image/Menu/tatlilar_637637866505322372.png"
        },
        {
            id:6,
            title: "İçecekler",
            image: "https://pizzahut.com.tr/CMSFiles/Image/Menu/icecekler_637637866621583518.png"
        },
    ]

  return (
    <div className='flex flex-col gap-[16px] px-[32px]'>
      <div className='text-[20px] leading-[23px] font-bold'>Siparişe Başla</div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[42px]'>
      {categories.map(cat => (
        <CategoryCard key={cat.id} category={cat} />
      ))}
      </div>
    </div>
  )
}

export default StartOrder
