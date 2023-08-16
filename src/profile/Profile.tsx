import {type Component } from "solid-js";
import NavbarLayout from "../components/NavbarLayout";
import ProfileHeader from "./components/ProfileHeader";
import DrawerNavigation from "./components/DrawerNavigation";

const Profile: Component<{}> = (props) => {
  return(
    <>
      <NavbarLayout/>
      <ProfileHeader/>
      <DrawerNavigation/>
    </>
  );
};

export default Profile;