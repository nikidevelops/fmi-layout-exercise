import React from "react";

function PopularPlaceHorizontal({ title, image }) {
  return (
    <a href="/" className="popular-place-item">
      <span
        className="image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <span class="h5">{title}</span>
    </a>
  );
}

export default PopularPlaceHorizontal;
