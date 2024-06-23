"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import Link from "next/link";
import style from "../css/home.module.css";
import { MobileView, BrowserView } from "react-device-detect";

function HomePage() {
  const [audio, SetAudio] = useState("");

  const Playit = () => {
    audio.play();
  };
  useEffect(() => {
    SetAudio(new Audio("home.mp3"));
  }, []);

  return (
    <>
      <BrowserView>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          style={{
            all: "unset",
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer",
            position: "absolute",
            top: "40rem",
            left: "90rem",
          }}
          onClick={Playit}
        >
          <HiOutlineSpeakerWave
            style={{
              fontSize: "2rem",
            }}
          />
        </motion.button>
        <h1
          className={style.heading}
          style={{
            color: "white",
            fontSize: "4rem",
            textAlign: "center",
            margin: "2rem 2rem",
          }}
        >
          Select Your Year{" "}
        </h1>
        <div
          style={{
            height: "30rem",
            width: "50rem",
            marginTop: "2rem",
            marginLeft: "25rem",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Link
              style={{
                all: "unset",
              }}
              href="/secoundyear"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  backgroundColor: "#BB86FC",
                  width: "20rem",
                  height: "15rem",
                  textAlign: "center",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "3rem",
                }}
                className={style.boxs}
              >
                <h1>2nd Year</h1>
              </motion.div>
            </Link>
            <Link
              style={{
                all: "unset",
              }}
              href="/thirdyear"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  backgroundColor: "#BB86FC",
                  width: "20rem",
                  height: "15rem",
                  textAlign: "center",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "3rem",
                }}
                className={style.boxs}
              >
                <h1>3rd Year</h1>
              </motion.div>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2.5rem",
            }}
          >
            <Link
              style={{
                all: "unset",
              }}
              href="/fourthyear"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  backgroundColor: "#BB86FC",
                  width: "20rem",
                  height: "15rem",
                  textAlign: "center",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "3rem",
                }}
                className={style.boxs}
              >
                <h1>4th Year</h1>
              </motion.div>
            </Link>
          </div>
        </div>
      </BrowserView>
      <MobileView>
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          style={{
            all: "unset",
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer",
            position: "absolute",
            top: "40rem",
            left: "90rem",
          }}
          onClick={Playit}
        >
          <HiOutlineSpeakerWave
            style={{
              fontSize: "2rem",
            }}
          />
        </motion.button> */}
        <h1
          className={style.heading}
          style={{
            color: "white",
            fontSize: "2rem",
            textAlign: "center",
            margin: "2rem 2rem",
          }}
        >
          Select Your Year{" "}
        </h1>
        <div
          style={{
            height: "30rem",
            // width: "50rem",
            // marginTop: "2rem",
            // marginLeft: "25rem",
            color: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Link
              style={{
                all: "unset",
              }}
              href="/secoundyear"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  backgroundColor: "#BB86FC",
                  width: "10rem",
                  height: "10rem",
                  textAlign: "center",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                }}
                className={style.boxs}
              >
                <h1>2nd Year</h1>
              </motion.div>
            </Link>
            <Link
              style={{
                all: "unset",
              }}
              href="/thirdyear"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  backgroundColor: "#BB86FC",
                  width: "10rem",
                  height: "10rem",
                  textAlign: "center",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                }}
                className={style.boxs}
              >
                <h1>3rd Year</h1>
              </motion.div>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2.5rem",
            }}
          >
            <Link
              style={{
                all: "unset",
              }}
              href="/fourthyear"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                style={{
                  backgroundColor: "#BB86FC",
                  width: "20rem",
                  height: "15rem",
                  textAlign: "center",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "3rem",
                }}
                className={style.boxs}
              >
                <h1>4th Year</h1>
              </motion.div>
            </Link>
          </div>
        </div>
      </MobileView>
    </>
  );
}

export default HomePage;
