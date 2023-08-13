import { Component } from "solid-js";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";

const MainPage: Component<{}> = (props) => {
  
  return(
    <>
    <Navbar/>
    <Jumbotron/>
    </>
  );
};

export default MainPage;