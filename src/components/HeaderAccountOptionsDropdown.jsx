import { useState } from "react";
import { handleSignout } from "../utils/authUtils";
import { USER_IMAGE_URL } from "../utils/constants";

const HeaderAccountOptionsDropdown = () => {
  const [hideUserMenu, setHideUserMenu] = useState(true);
  return (
    <div id="header-user-menu" className="relative mr-7"  onMouseEnter={() => setHideUserMenu(false)} onMouseLeave={() => setHideUserMenu(true)}>
      <img
        src={USER_IMAGE_URL}
        alt="user-img"
        className="cursor-pointer relative"
      />
      <div id="bridge" className="absolute w-full right-0 py-2"></div>
      <div id="user-menu-content" className="absolute right-0 py-2 mt-4 bg-black opacity-80" hidden={hideUserMenu}>
        <p className="px-4 py-2 over w-full text-nowrap">Item 1</p>
        <p className="px-4 py-2 over w-full text-nowrap">Item 2</p>
        <p className="px-4 py-2 over w-full text-nowrap">Item 3</p>
        <hr className="ml-auto mr-auto w-10/12" />
        <button className="px-4 py-2 text-nowrap" onClick={handleSignout}>
          Sign out of Netflix
        </button>
      </div>
    </div>
  );
};

export default HeaderAccountOptionsDropdown;