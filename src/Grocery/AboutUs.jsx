import React from "react";

const AboutUs = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://img.freepik.com/free-vector/watercolor-abstract-floral-background_52683-134424.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704067200&semt=ais')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "black",
    padding: "20px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "white" }}>ABOUT US</h1>
      <p>
        <h2>ABOUT US</h2>
        <h3>
          * Our mission is to enrich your daily life through fresh and quality
          groceries that cater to your unique needs.
          <br /> * We are committed to elevating your shopping experience, where
          each product is carefully selected to meet the highest standards of
          freshness and taste.
          <br />
          * Join us on a journey where every item transforms your everyday meals
          into delightful experiences, and every visit to our store is filled
          with the essence of quality.
          <br />* Welcome to a world where the pleasure of grocery shopping is
          redefined.
        </h3>
      </p>
    </div>
  );
};

export default AboutUs;
