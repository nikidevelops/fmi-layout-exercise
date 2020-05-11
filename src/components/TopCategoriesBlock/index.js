import React from "react";
import PromoCategory from "../PromoCategory";
import AbroadCover from "../../assets/images/places/abroad.jpg";
import BulgariaCover from "../../assets/images/places/bulgaria.jpg";

function TopCategoriesBlock() {
  return (
    <div className="row">
      <div className="col-md-6 mb-4">
        <PromoCategory
          title="Europe"
          description="Beautiful architecture and culture"
          buttonTitle="Go to Europe"
          image={AbroadCover}
        />
      </div>
      <div className="col-md-6 mb-4">
        <PromoCategory
          title="Bulgaria"
          description="Great nature and culture sites"
          buttonTitle="Go to Bulgaria"
          image={BulgariaCover}
        />
      </div>
    </div>
  );
}

export default TopCategoriesBlock;
