import { useState } from "react";
import { handleSignout } from "../utils/authUtils";
import { USER_IMAGE_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const HeaderAccountOptionsDropdown = () => {
  const [hideUserMenu, setHideUserMenu] = useState(true);

  const userDisplayName = useSelector(store => store.user.displayName);

  return (
    <div id="header-user-menu" className="relative z-50 mr-7"  onMouseEnter={() => setHideUserMenu(false)} onMouseLeave={() => setHideUserMenu(true)}>
      <img
        src={USER_IMAGE_URL}
        alt="user-img"
        className="cursor-pointer"
      />
      <div id="bridge" className=" cursor-pointer absolute w-full right-0 px-6 py-2"></div>
      <div id="user-menu-content" className="absolute right-0 py-2 mt-4 bg-black opacity-80" hidden={hideUserMenu}>
        <h1 className="px-4 py-2 over w-full text-nowrap">Hello,<span className="block text-2xl">{userDisplayName}</span></h1>
        <hr className="ml-auto mr-auto w-10/12" />
        <p className="px-4 py-2 over w-full text-nowrap">Option 1</p>
        <p className="px-4 py-2 over w-full text-nowrap">Option 2</p>
        <p className="px-4 py-2 over w-full text-nowrap">Option 3</p>
        <hr className="ml-auto mr-auto w-10/12" />
        <button className="px-4 py-2 text-nowrap" onClick={handleSignout}>
          Sign out of Netflix
        </button>
      </div>
    </div>
  );
};

export default HeaderAccountOptionsDropdown;