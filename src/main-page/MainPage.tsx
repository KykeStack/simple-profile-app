import { Component } from "solid-js";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import SocialAuthButton from "../components/SocialAuthButton";


const MainPage: Component<{}> = (props) => {
    return(
    <>
    <Navbar/>
    <Jumbotron/>
    </>
  );
};

export default MainPage;