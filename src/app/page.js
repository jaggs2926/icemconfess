import React from "react";
import HomePage from "@/components/Home";

function Home() {
  return (
    <>
      <marquee
        style={{
          color: "white",
        }}
      >
        Expose your friend and know one will know who you are 😈... No Login
        required, nothing except story is required
      </marquee>
      <div
        style={{
          marginTop: "-1.1rem",
        }}
      >
        <HomePage />
      </div>
    </>
  );
}

export default Home;
