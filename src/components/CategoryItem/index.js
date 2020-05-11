import React from "react";

function CategoryItem({ iconClassName, title, color }) {
  return (
    <a href="/" className="category-item mr-2">
      <span className={`icon text-${color}`}>
        <i className={iconClassName}></i>
      </span>
      {!!title && <small>{title}</small>}
    </a>
  );
}

export default CategoryItem;
