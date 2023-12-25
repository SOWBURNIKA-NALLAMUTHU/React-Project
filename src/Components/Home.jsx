// import React from "react";
// import { Link } from "react-router-dom";
// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to My React App!</h1>
//       <p>This is the home page.</p>
//       <Link to="/about">Go to About page</Link>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDkfnuzfjy9VrrNGpPwKT7s8Tf1gQ6pgM6ou2ulO7psHzyqklb-6-_ZIMhaUkHoeRsuE&usqp=CAU')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Adjust this to cover the entire viewport height
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white", // Text color on top of the background image
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to My React App!</h1>
      <p>This is the home page.</p>
      <Link to="/about">Go to About page</Link>
    </div>
  );
};

export default Home;
