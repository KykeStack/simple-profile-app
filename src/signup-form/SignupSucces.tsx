
import { Component } from "solid-js";
import NavbarLayout from "../components/NavbarLayout";
import SuccessCard from "../components/SuccessCard";
import { HOME_PAGE } from "../global/values";

const SignupSucces: Component<{
    username: string
    email: string
}> = (props) => {
return(
    <>
    <NavbarLayout/>
    <SuccessCard
        titleText="Signup Success!"
        bodyText={
            `Thanks ${props.username}, your account it's almost ready.
            A confirmation email, has been sent to ${props.email}. 
            confirm your email address before try to login`
        }
        redirectText="Go to main page"
        redirectUrl={HOME_PAGE}
    />  
    </>
  );
};

export default SignupSucces;