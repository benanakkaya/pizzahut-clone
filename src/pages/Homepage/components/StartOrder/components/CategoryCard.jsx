import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <a href="/" className="flex flex-col items-center group ">
        <img
          className="rounded-[50%] w-full md:group-hover:scale-[115%] duration-300"
          src={category.image}
          alt={category.title}
        />
      <h4 className="text-[16px] leading-[19px] font-bold z-20 group-hover:text-customRed">{category.title}</h4>
    </a>
  );
};

export default CategoryCard;
