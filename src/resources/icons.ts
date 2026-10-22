import { IconType } from "react-icons";

import { FaShieldHeart } from "react-icons/fa6";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoShieldCheckmarkOutline } from "react-icons/io5";



export const iconLibrary: Record<string, IconType> = {
  rocket: HiOutlineRocketLaunch,
  shieldHeart: FaShieldHeart,
  shield: IoShieldCheckmarkOutline,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;