import React from "react";
import SponsorLogo1 from "../../assets/images/placeholders/placeholder-logo-1.png";
import SponsorLogo2 from "../../assets/images/placeholders/placeholder-logo-2.png";

function TopSponsors() {
  return (
    <ul class="sponsors-list">
      <li class="sponsors-list-item">
        <span>
          <img src={SponsorLogo1} alt="" className="mr-3" />
        </span>
        <small>
          Travel Safe
          <br />
          Partner
        </small>
      </li>
      <li class="sponsors-list-item">
        <span>
          <img src={SponsorLogo2} alt="" className="mr-3" />
        </span>
        <small>
          Official Site
          <br />
          Partner
        </small>
      </li>
    </ul>
  );
}

export default TopSponsors;
