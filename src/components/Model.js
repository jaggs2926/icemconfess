"use client";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "../css/nav.module.css";
import { MobileView, BrowserView } from "react-device-detect";

function Model(props) {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handleSubmit = () => {
    props.submitHandle(title, story);
    props.onHide();
  };

  return (
    <>
      <BrowserView>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{
            color: "white",
            borderRadius: "15px",
            borderColor: "white",
            borderWidth: "2px",
            borderStyle: "solid",
            position: "absolute",
            top: "20%",
            left: "35%",
            backgroundColor: "grey",
            width: "30rem",
          }}
          className={style.deathrow}
        >
          <Modal.Header>
            <Modal.Title
              style={{
                fontSize: "2rem",
                margin: "2rem 2rem",
              }}
              id="contained-modal-title-vcenter"
            >
              Tell me the story
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <input
              type="text"
              placeholder="Title of story"
              style={{
                height: "2rem",
                paddingLeft: "1rem",
                fontSize: "1.6rem",
                borderRadius: "15px",
                fontFamily: "deathrow",
              }}
              onChange={(val) => {
                setTitle(val.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Story"
              style={{
                paddingLeft: "1rem",
                fontSize: "1.6rem",
                borderRadius: "15px",
                marginTop: "2rem",
                fontFamily: "deathrow",
              }}
              onChange={(val) => {
                setStory(val.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer
            style={{
              display: "flex",
              justifyContent: "space-arounds",
              marginBottom: "1rem",
            }}
          >
            <Button
              style={{
                marginLeft: "2rem",
                backgroundColor: "#03DAC5",
                color: "grey",
                width: "5rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2rem",
                marginTop: "2rem",
                cursor: "pointer",
                fontSize: "1.5rem",
                fontFamily: "deathrow",
              }}
              onClick={props.onHide}
            >
              Close
            </Button>
            <Button
              style={{
                marginLeft: "2rem",
                backgroundColor: "#03DAC5",
                color: "grey",
                width: "5rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2rem",
                marginTop: "2rem",
                cursor: "pointer",
                fontSize: "1rem",
                fontFamily: "deathrow",
              }}
              onClick={handleSubmit}
            >
              Expose Now
            </Button>
          </Modal.Footer>
        </Modal>
      </BrowserView>
      <MobileView>
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          style={{
            color: "white",
            borderRadius: "15px",
            borderColor: "white",
            borderWidth: "2px",
            borderStyle: "solid",
            position: "absolute",
            top: "20%",
            left: "10%",
            backgroundColor: "grey",
            width: "20rem",
          }}
          className={style.deathrow}
        >
          <Modal.Header>
            <Modal.Title
              style={{
                fontSize: "2rem",
                margin: "2rem 2rem",
              }}
              id="contained-modal-title-vcenter"
            >
              Tell me the story
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <input
              type="text"
              placeholder="Title of story"
              style={{
                height: "2rem",
                paddingLeft: "1rem",
                fontSize: "1.6rem",
                borderRadius: "15px",
                fontFamily: "deathrow",
              }}
              onChange={(val) => {
                setTitle(val.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Story"
              style={{
                paddingLeft: "1rem",
                fontSize: "1.6rem",
                borderRadius: "15px",
                marginTop: "2rem",
                fontFamily: "deathrow",
              }}
              onChange={(val) => {
                setStory(val.target.value);
              }}
            />
          </Modal.Body>
          <Modal.Footer
            style={{
              display: "flex",
              justifyContent: "space-arounds",
              marginBottom: "1rem",
            }}
          >
            <Button
              style={{
                marginLeft: "2rem",
                backgroundColor: "#03DAC5",
                color: "grey",
                width: "5rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2rem",
                marginTop: "2rem",
                cursor: "pointer",
                fontSize: "1.5rem",
                fontFamily: "deathrow",
              }}
              onClick={props.onHide}
            >
              Close
            </Button>
            <Button
              style={{
                marginLeft: "2rem",
                backgroundColor: "#03DAC5",
                color: "grey",
                width: "5rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2rem",
                marginTop: "2rem",
                cursor: "pointer",
                fontSize: "1rem",
                fontFamily: "deathrow",
              }}
              onClick={handleSubmit}
            >
              Expose Now
            </Button>
          </Modal.Footer>
        </Modal>
      </MobileView>
    </>
  );
}

export default Model;
