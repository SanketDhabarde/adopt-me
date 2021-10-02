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
      <div>
        <Router>
          <header>
            <Link to="/">
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
