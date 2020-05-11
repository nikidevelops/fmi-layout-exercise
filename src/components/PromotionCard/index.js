import React from "react";

function PromotionCard({ image, title, description }) {
  return (
    <div className="promo-card">
      <div className="texts">
        <h5 className="mb-1">{title}</h5>
        <p className="small">{description}</p>
      </div>
      {!!image && (
        <div
          className="image"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      )}
    </div>
  );
}

export default PromotionCard;
