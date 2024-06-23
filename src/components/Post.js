"use client";

import React from "react";
import style from "../css/post.module.css";
import { motion } from "framer-motion";
import { MobileView, BrowserView } from "react-device-detect";
import { useMediaQuery } from "react-responsive";

function Post({ title, para }) {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 8 }}
        className={style.mainPost}
      >
        <div className={style.postMain}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.para}>{para}</p>
        </div>
      </motion.div>
    </>
  );
}

export default Post;
