import React from "react";
import CategoryItem from "../CategoryItem";

function CategoryRow() {
  return (
    <div className="d-flex overflow-auto">
      <CategoryItem
        iconClassName="fas fa-globe-europe"
        title="Europe"
        color="danger"
      />
      <CategoryItem
        iconClassName="fas fa-umbrella-beach"
        title="Sea"
        color="info"
      />
      <CategoryItem
        iconClassName="fas fa-mountain"
        title="Mountain"
        color="warning"
      />
      <CategoryItem
        iconClassName="fas fa-car-side"
        title="Car Trip"
        color="info"
      />
      <CategoryItem
        iconClassName="fas fa-plane-departure"
        title="Air"
        color="success"
      />
      <CategoryItem
        iconClassName="fas fa-wine-glass-alt"
        title="Drink"
        color="primary"
      />
      <CategoryItem iconClassName="fas fa-spa" title="SPA" color="info" />
      <CategoryItem iconClassName="fas fa-tram" title="Tram" color="danger" />
      <CategoryItem
        iconClassName="fas fa-swimmer"
        title="Swim"
        color="primary"
      />
      <CategoryItem
        iconClassName="fas fa-compass"
        title="Explore"
        color="success"
      />
      <CategoryItem
        iconClassName="fas fa-atlas"
        title="Passport"
        color="info"
      />
      <CategoryItem iconClassName="fas fa-bed" title="Hotel" color="info" />
      <CategoryItem
        iconClassName="fas fa-concierge-bell"
        title="Food"
        color="info"
      />
      <CategoryItem iconClassName="fas fa-tv" title="TV" color="info" />
      <CategoryItem
        iconClassName="fas fa-dumbbell"
        title="Fitness"
        color="info"
      />
      <CategoryItem
        iconClassName="fas fa-cocktail"
        title="Cocktails"
        color="info"
      />
    </div>
  );
}

export default CategoryRow;
