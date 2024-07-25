import { useState } from "react";
import { navContextProvider } from "../../context";
import TopNav from "../../components/Navbar/TopNav";
import SideNav from "../../components/Navbar/SideNav";
import "./navbar.scss";

const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  const handleNav = ():void => {
    setShowNav((prev) => !prev);
  };
  return (
    <navContextProvider.Provider value={showNav}>
      <div className="combined__nav">
        <TopNav handleNav={handleNav} />
        <SideNav />
      </div>
    </navContextProvider.Provider>
  );
};

export default Navbar;
