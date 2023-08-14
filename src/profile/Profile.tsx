import {type Component, Show, createSignal, onMount } from "solid-js";
import supabaseClient from "../global/SupabaseClient";

const Profile: Component<{}> = (props) => {
  return(
    <div>
        <section id="whenSignedIn" hidden={true}>
            <div id="userDetails"></div>
            <button id="signOutBtn" class="btn btn-primary">Sign Out</button>
            <div id="askForEmail" hidden={true} class="m-5">
                <form id="askForEmailForm">
                <h2>Would you like to sign up for emails?</h2>
                <div class="form-group">
                    <label for="emailInput" class="m-2">Your Email:</label>
                    <input
                    id="emailInput"
                    type="email"
                    class="form-control m-2"
                    placeholder="Email"
                    />
                </div>
                <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>

            <div id="emailConfirmation" hidden={true}>
                <h2>You're signed up for emails!</h2>
                <button id="cancelEmailBtn" class="btn btn-primary m-2">
                Cancel Email
                </button>
            </div>

            <div id="adminSendEmails" hidden={true}>
                <h2>Super Secret Admin Email Sender</h2>
                <form id="adminEmailSender">
                <input id="subjectInput" type="text" placeholder="Subject" class="form-control m-2" />
                <textarea id="emailContents" class="form-control m-2"></textarea>
                <button type="submit" class="btn btn-primary m-2"/>
                    Send Email
                </form>
            </div>
            </section>

            <section id="myThings" hidden={true}>
            <h2>My Things</h2>
            <div id="myThingsList"></div>

            <button id="createThing" class="btn btn-success">Create a Thing</button>
            </section>

            <section id="allThings">
            <h2>All Things</h2>
            <div id="allThingsList"></div>
        </section>
    </div>
  );
};

export default Profile;