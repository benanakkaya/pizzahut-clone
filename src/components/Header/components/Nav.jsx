import React from 'react'

const Nav = () => {

    const navItems = [
        {
          id: 1,
          name: "Kampanyalar",
        },
        {
          id: 2,
          name: "Pizzalar",
        },
        {
          id: 3,
          name: "WingStreet",
        },
        {
          id: 4,
          name: "Yan Ürünler",
        },
        {
          id: 5,
          name: "Restoranlar",
        },
      ];

  return (
    <nav className="flex items-center gap-[32px] text-black text-opacity-[87%] leading-[22.856px] ">
        {navItems.map((item) => (
          <a
            key={item.id}
            href="/"
            className="text-[16px] leading-[19px] font-bold hover:text-customRed"
          >
            {item.name}
          </a>
        ))}
      </nav>
  )
}

export default Nav