import React from "react";
import { Links } from "./links";
import NavLinks from "./NavLinks";

const CategoryNavLinks = ({ categoryName, navLinks }: Links) => {
  return (
    <div className="cat__links__cont">
      <p className="nav__category">{categoryName}</p>
      <div className="cat__nav__link__cont">
        {navLinks.map((link) => (
          <NavLinks
            key={link.pathName}
            logo={link.logo}
            pathName={link.pathName}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryNavLinks;
