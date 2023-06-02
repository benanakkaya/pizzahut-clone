import React from 'react'

const Nav = () => {

    const navItems = [
        {
          id: 1,
          name: "Kampanyalar",
          path: "/kampanyalar"
        },
        {
          id: 2,
          name: "Pizzalar",
          path: "/pizzalar"
        },
        {
          id: 3,
          name: "WingStreet",
          path: "/wing-street"
        },
        {
          id: 4,
          name: "Yan Ürünler",
          path: "/yan-urunler"
        },
        {
          id: 5,
          name: "Restoranlar",
          path: "/restoranlar"
        },
      ];

  return (
    <nav className="hidden xl:flex items-center gap-[32px] text-black text-opacity-[87%] leading-[22.856px] ">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.path}
            className="text-[16px] leading-[19px] font-bold hover:text-customRed"
          >
            {item.name}
          </a>
        ))}
      </nav>
  )
}

export default Nav