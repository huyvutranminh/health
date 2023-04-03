import React from "react";
import logo from "../../assets/images/logo.svg";
import challenge from "../../assets/icons/icon_challenge.svg";
import info from "../../assets/icons/icon_info.svg";
import memo from "../../assets/icons/icon_memo.svg";
import { ReactComponent as Menu } from "../../assets/icons/icon_menu.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-dark h-[64px] w-full"
    >
      <div className="flex justify-between items-center w-3/4 h-full mx-auto">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[109px]" />
        </Link>
        <div className="flex items-center text-white">
          <Link to="#" className="flex items-center p-4">
            <img src={memo} alt="memo" />
            <span className="ml-2">自分の記録</span>
          </Link>
          <Link to="#" className="flex items-center p-4">
            <img src={challenge} alt="challenge" />
            <span className="ml-2">チャレンジ</span>
          </Link>
          <Link to="#" className="flex items-center p-4">
            <img src={info} alt="info" />
            <span className="ml-2">お知らせ</span>
          </Link>
          <button className="p-4">
            <Menu />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
