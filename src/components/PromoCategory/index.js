import React from "react";

function PromoCategory({ title, description, image, buttonTitle }) {
  return (
    <div
      className="promo-category"
      style={{
        backgroundImage: `url('${image}')`,
      }}
    >
      <h4 className="text-uppercase font-weight-bold">{title}</h4>
      <p>{description}</p>
      <button className="btn text-white btn-primary">{buttonTitle}</button>
    </div>
  );
}

export default PromoCategory;
