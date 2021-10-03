import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; //eslint-disable-line
import ThemeContext from "./ThemeContext";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me!"),
//     React.createElement(Pet, {
//       name: "axi",
//       animal: "dog",
//       breed: "not known",
//     }),
//     React.createElement(Pet, { name: "lara", animal: "cat", breed: "not" }),
//     React.createElement(Pet, {
//       name: "steve",
//       animal: "tiger",
//       breed: "not known to me",
//     }),
//   ]);
// };

const App = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="p-0 m-0"
        style={{
          background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)"
        }}
      >
        <Router>
          <header
            className="w-full text-center mb-10 p-7 bg-gradient-to-b from-purple-400 via-pink-500 to-red-500"
          >
            <Link to="/" className="text-6xl text-white hover:text-gray-200">
              <h1>Adopt me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route>
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
