"use client";
import React, { useEffect } from "react";
import Post from "@/components/Post";
import { motion } from "framer-motion";
import style from "../../css/nav.module.css";
import Model from "@/components/Model";
import { MobileView, BrowserView } from "react-device-detect";
import axios from "axios";

function page() {
  const [modalShow, setModalShow] = React.useState(false);
  const [res, setRes] = React.useState([]);

  const submitHandle = async (title, story) => {
    console.log(title);
    try {
      await axios.post("https://confessapi.vercel.app/uploads/", {
        title,
        story,
        year: 4,
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
          year: 4,
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
      <BrowserView>
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
            Fourth Year{" "}
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
            className={style.deathrow}
            onClick={() => {
              setModalShow(true);
            }}
          >
            EXPOSE
          </motion.h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            overflow: "hidden",
          }}
        >
          {res.post &&
            res.post.map((i) => <Post title={i.title} para={i.story} />)}
        </div>
        <Model
          show={modalShow}
          onHide={() => setModalShow(false)}
          submitHandle={submitHandle}
        />
      </BrowserView>
      <MobileView>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            // flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "1.5rem",
              textAlign: "center",
            }}
            className={style.horror}
          >
            Fourth Year{" "}
          </h1>
          <motion.h2
            whileHover={{ scale: 1.1 }}
            onKeyPress={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            style={{
              backgroundColor: "#03DAC5",
              color: "grey",
              width: "10rem",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "2rem",
              cursor: "pointer",
              fontSize: "2.5rem",
            }}
            onClick={() => {
              setModalShow(true);
            }}
            className={style.deathrow}
          >
            EXPOSE
          </motion.h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {res.post &&
            res.post.map((i) => <Post title={i.title} para={i.story} />)}
        </div>
        <Model
          show={modalShow}
          onHide={() => setModalShow(false)}
          submitHandle={submitHandle}
        />
      </MobileView>
    </>
  );
}

export default page;
