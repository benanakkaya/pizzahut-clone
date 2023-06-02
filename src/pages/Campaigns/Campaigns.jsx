import React from 'react'
import ProductCard from './components/ProductCard'
import TopBar from './components/TopBar'

const Campaigns = () => {

    const campaigns = [
        {
            id:1,
            title:"Ayın Fırsatları",
            products: [
                {
                    id:1,
                    title:"Şampiyonlar Menüsü",
                    description: "Büyük Boy Pizza + Pepsi Max 1L (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/sampiyonlar-menusu.jpg",
                    price: 169.00
                },
                {
                    id:2,
                    title:"Totem Menü",
                    description: "Büyük Boy Pizza + Orta Boy Pizza + Litrelik İçecek + Fırınlanmış Tırtıklı Patates ya da Sarımsaklı Ekmek (3 Dilim) (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/totem-menu_638146604183541228.jpg",
                    price: 285.00
                },
                {
                    id:3,
                    title:"2 Büyük Boy Pizza + Litrelik İçecek",
                    description: "(Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/2-buyuk-pizza-litre-icecek_638146602316813988.jpg",
                    price: 274.90
                },
                {
                    id:4,
                    title:"Derbi Menüsü 1",
                    description: "2 Büyük Boy Pizza + Litrelik İçecek (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/derbi-menu-1.jpg",
                    price: 250.00
                },
                {
                    id:5,
                    title:"Şampiyonlar Menüsü",
                    description: "Büyük Boy Pizza + Pepsi Max 1L (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/sampiyonlar-menusu.jpg",
                    price: 169.00
                },
                {
                    id:6,
                    title:"Totem Menü",
                    description: "Büyük Boy Pizza + Orta Boy Pizza + Litrelik İçecek + Fırınlanmış Tırtıklı Patates ya da Sarımsaklı Ekmek (3 Dilim) (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/totem-menu_638146604183541228.jpg",
                    price: 285.00
                },
                {
                    id:7,
                    title:"2 Büyük Boy Pizza + Litrelik İçecek",
                    description: "(Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/2-buyuk-pizza-litre-icecek_638146602316813988.jpg",
                    price: 274.90
                },
                {
                    id:8,
                    title:"Derbi Menüsü 1",
                    description: "2 Büyük Boy Pizza + Litrelik İçecek (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/derbi-menu-1.jpg",
                    price: 250.00
                },
                {
                    id:9,
                    title:"Şampiyonlar Menüsü",
                    description: "Büyük Boy Pizza + Pepsi Max 1L (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/sampiyonlar-menusu.jpg",
                    price: 169.00
                },
                {
                    id:10,
                    title:"Totem Menü",
                    description: "Büyük Boy Pizza + Orta Boy Pizza + Litrelik İçecek + Fırınlanmış Tırtıklı Patates ya da Sarımsaklı Ekmek (3 Dilim) (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/totem-menu_638146604183541228.jpg",
                    price: 285.00
                },
                {
                    id:11,
                    title:"2 Büyük Boy Pizza + Litrelik İçecek",
                    description: "(Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/2-buyuk-pizza-litre-icecek_638146602316813988.jpg",
                    price: 274.90
                },
                {
                    id:12,
                    title:"Derbi Menüsü 1",
                    description: "2 Büyük Boy Pizza + Litrelik İçecek (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/derbi-menu-1.jpg",
                    price: 250.00
                }
            ]
        },
        {
            id:2,
            title:"Çoklu Menüler",
            products: [
                {
                    id:1,
                    title:"10'lu Orta Pizza Menü",
                    description: "10 Orta Boy Pizza + 3 Litrelik İçecek (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/10lu-orta-pizza-menu.jpg",
                    price: 699.00
                },
                {
                    id:2,
                    title:"15'li Orta Pizza Menü",
                    description: "15 Orta Boy Pizza + 5 Litrelik İçecek (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/15li-orta-pizza-menu.jpg",
                    price: 1099.00
                }
            ]
        },
        {
            id:3,
            title:"Ekstra Lezzetler Promosyonları",
            products: [
                {
                    id:1,
                    title:"2'li Bombe",
                    description: "10 Orta Boy Pizza + 3 Litrelik İçecek (Fiyat Trend pizzalarda geçerlidir. Kategori değişikliğinde fiyat farkı mevcuttur.)",
                    image: "https://www.pizzahut.com.tr/CMSFiles/Product/LittleImage/2li-bombe.jpg",
                    price: 29.90
                }
            ]
        }
    ]


  return (
    <main className='flex flex-col gap-[30px] xl:gap-[38px]'>
      <TopBar />
      <div className='xl:px-[68px] xl:py-[12px] flex flex-col gap-[28px] '>
        {campaigns.map(campaign => (
        <div className='flex flex-col gap-[16px]'>
        <h3 className='text-[20px] leading-[23px] font-bold'>{campaign.title}</h3>
        <div className='grid grid-cols-4 gap-[26px]'>
            {campaign.products?.map(product => (
                <ProductCard product={product} />
            ))}
        </div>
    </div>
        ))}
      </div>
    </main>
  )
}

export default Campaigns
