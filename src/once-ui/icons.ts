import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiCalendar,
  HiCheck,
  HiCheckCircle,
  HiChevronDown,
  HiChevronLeft,
  HiChevronRight,
  HiChevronUp,
  HiExclamationCircle,
  HiExclamationTriangle,
  HiEyeDropper,
  HiInformationCircle,
  HiMiniMinus,
  HiMiniPlus,
  HiMiniQuestionMarkCircle,
  HiMiniUser,
  HiMiniUserCircle,
  HiMiniXMark,
  HiOutlineArrowPath,
  HiOutlineClipboard,
  HiOutlineComputerDesktop,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineLink,
  HiOutlineMagnifyingGlass,
  HiOutlineMoon,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineSun,
} from "react-icons/hi2";

import { RiLayout3Fill, RiVisaLine } from "react-icons/ri";

import {
  FaDiscord,
  FaGithub,
  FaGlobe,
  FaGoogle,
  FaLinkedin,
  FaMapLocation,
  FaPhone,
} from "react-icons/fa6";

import { IoMail } from "react-icons/io5";
import { LuChevronsLeftRight } from "react-icons/lu";
import { PiReadCvLogo } from "react-icons/pi";
import { MdQueryStats } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export const iconLibrary: Record<string, IconType> = {
  chevronUp: HiChevronUp,
  chevronDown: HiChevronDown,
  chevronRight: HiChevronRight,
  chevronLeft: HiChevronLeft,
  chevronsLeftRight: LuChevronsLeftRight,
  refresh: HiOutlineArrowPath,
  check: HiCheck,
  light: HiOutlineSun,
  dark: HiOutlineMoon,
  helpCircle: HiMiniQuestionMarkCircle,
  infoCircle: HiInformationCircle,
  warningTriangle: HiExclamationTriangle,
  errorCircle: HiExclamationCircle,
  checkCircle: HiCheckCircle,
  eyeDropper: HiEyeDropper,
  clipboard: HiOutlineClipboard,
  person: HiMiniUser,
  close: HiMiniXMark,
  openLink: HiOutlineLink,
  discord: FaDiscord,
  google: FaGoogle,
  github: FaGithub,
  resume: PiReadCvLogo,
  linkedin: FaLinkedin,
  mail: IoMail,
  phone: FaPhone,
  mapPin: FaMapLocation,
  arrowUpRight: HiArrowUpRight,
  minus: HiMiniMinus,
  plus: HiMiniPlus,
  calendar: HiCalendar,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  search: HiOutlineMagnifyingGlass,
  visa: RiVisaLine,
  security: HiOutlineShieldCheck,
  sparkle: HiOutlineSparkles,
  computer: HiOutlineComputerDesktop,
  user: HiMiniUserCircle,
  layout: RiLayout3Fill,
  skills: MdQueryStats,
  instagram: AiFillInstagram,
  globe: FaGlobe,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;
