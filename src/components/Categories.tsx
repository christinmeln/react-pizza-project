import React from "react";

type CategoriesProps = { value: number; onClickCategory: (i: number) => void };

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((element, i) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
