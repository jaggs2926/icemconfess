"use client";
import React from "react";

import style from "../css/nav.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { MobileView, BrowserView } from "react-device-detect";

function Navbar() {
  return (
    <>
      <BrowserView>
        <div
          style={{
            backgroundColor: "#262626",
            width: "100%",
            height: "6rem",
            marginTop: 0,
            borderEndStartRadius: "20px",
            borderEndEndRadius: "20px",
            fontFamily: "cursive",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            style={{
              all: "unset",
              cursor: "pointer",
            }}
            href="/"
          >
            <h1 className={style.fontColorDecor}>GHOST OF ICEM</h1>
          </Link>
          <Link
            href="/deathrow"
            replace={false}
            style={{
              all: "unset",
            }}
          >
            <motion.h2
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              style={{
                marginRight: "4rem",
                backgroundColor: "#03DAC5",
                color: "grey",
                width: "12rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2rem",
                marginTop: "2rem",
                cursor: "pointer",
                fontSize: "2rem",
              }}
              className={style.deathrow}
            >
              DEATH ROW
            </motion.h2>
          </Link>
        </div>
      </BrowserView>
      <MobileView>
        <div
          style={{
            backgroundColor: "#262626",
            width: "100%",
            height: "6rem",
            marginTop: 0,
            borderEndStartRadius: "20px",
            borderEndEndRadius: "20px",
            fontFamily: "cursive",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            style={{
              all: "unset",
              cursor: "pointer",
            }}
            href="/"
          >
            <h1
              style={{
                fontSize: "2rem",
              }}
              className={style.fontColorDecor}
            >
              GHOST OF ICEM
            </h1>
          </Link>
        </div>
      </MobileView>
    </>
  );
}

export default Navbar;
