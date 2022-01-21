import React from "react";

const Card = ({ nameTag, image }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "10px",
        borderRadius: 10,
        padding: 5,
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt="image"
          height="70px"
          style={{ margin: 5, borderRadius: 10 }}
        />
        <div style={{ margin: "5px" }}>
          <h2>My name is {nameTag}</h2>
          <h4>Founder and CEO</h4>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p>
          Description: I am react noob, I dont knwo how to use it.I am still a
          developer
        </p>
      </div>
    </div>
  );
};

export default Card;
