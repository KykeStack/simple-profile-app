import {type Component } from "solid-js";
import SocialAuthButton from "../../components/SocialAuthButton";
import GoggleSvg from "../../assets/GoggleSvg";
import supabaseClient from "../../global/SupabaseClient";
import { useGlobalContext } from "../../global/ContextManager";

const SignLogsGoogle: Component<{}> = (props) => {
  const { setUserLogInStatus } = useGlobalContext();

  const googleSignIn = async () => {
      const { data, error } = await supabaseClient().auth.signInWithOAuth({
          provider: 'google',
          options: {
            queryParams: {
              access_type: 'offline',
              prompt: 'consent',
            },
          },
        })
      if (data) setUserLogInStatus(true);
      if (error){
          console.log('Error signing out:', error.message);
      } 
  };

  return(
    <SocialAuthButton
        svg={GoggleSvg}
        buttonText="Sign in with Google"
        additionaTex="Popular"
        onCallParentFunction={googleSignIn}
    />
    );
};

export default SignLogsGoogle;