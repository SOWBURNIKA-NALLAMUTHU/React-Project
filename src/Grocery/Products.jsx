import React from "react";
function Products() {
  const containerStyle = {
    backgroundImage:
      "url('https://www.printasia.in/media/catalog/product/g/r/grocery_9.jpg')",
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
      <h1 style={{ color: "purple" }}>PRODUCTS</h1>
      <h4> * FRUITS</h4>
      <h4> * VEGETABLES</h4>
      <h4> * GRAINS</h4>
      <h4> * DAIRY</h4>
    </div>
  );
}
export default Products;
