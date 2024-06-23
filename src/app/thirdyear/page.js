"use client";

import React, { useEffect } from "react";
import Post from "@/components/Post";
import { motion } from "framer-motion";
import style from "../../css/nav.module.css";
import Model from "@/components/Model";
import { MobileView, BrowserView } from "react-device-detect";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

function page() {
  const [modalShow, setModalShow] = React.useState(false);
  const [res, setRes] = React.useState([]);

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return isDesktop ? children : null;
  };

  const submitHandle = async (title, story) => {
    console.log(title);
    try {
      await axios.post("https://confessapi.vercel.app/uploads/", {
        title,
        story,
        year: 3,
      });
      getData();
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("https://confessapi.vercel.app/uploads/", {
        params: {
          year: 3,
        },
      });
      console.log(res.data);
      setRes(res.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontFamily: "horor",
            textAlign: "center",
          }}
        >
          Third Year{" "}
        </h1>
        <motion.h2
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          style={{
            marginRight: "4rem",
            backgroundColor: "#03DAC5",
            color: "grey",
            width: "15rem",
            height: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2rem",
            marginTop: "2rem",
            cursor: "pointer",
            fontSize: "3.5rem",
          }}
          onClick={() => {
            setModalShow(true);
          }}
          className={style.deathrow}
        >
          EXPOSE
        </motion.h2>
      </div>
      <div className={style.postCollect}>
        {res.post &&
          res.post.map((i) => <Post title={i.title} para={i.story} />)}
      </div>
      <Model
        show={modalShow}
        onHide={() => setModalShow(false)}
        submitHandle={submitHandle}
      />
    </>
  );
}

export default page;
