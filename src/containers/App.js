import ReactDOM from "react-dom/client";
import React from "react";
import SideBarContainer from "./SideBarContainer/SideBarContainer";
import NavBarContainer from "./NavBarContainer/NavbarContainer";
import BodyContainer from "./BodyContainer/BodyContainer";

const App = () => {
  return (
    <div className="App">
      <SideBarContainer></SideBarContainer>
      <NavBarContainer></NavBarContainer>
      <BodyContainer></BodyContainer>
    </div>
  );
};

export default App;
