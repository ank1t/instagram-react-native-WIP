import React, { useEffect, useState } from "react";
import { SignedInStack, SignedOutStack } from "./screens/Navigation";
import { firebase } from "./firebase";

export default function AuthNavigation() {
    const [currentUser, setCurrentUser] = useState(null);
    const userHandler = (user) =>
      user ? setCurrentUser(user) : setCurrentUser(null);
    const getViewToDisplay = () => {
      return currentUser ? <SignedInStack/> : <SignedOutStack />;
    };
    useEffect(
      () => firebase.auth().onAuthStateChanged((user) => userHandler(user)),
      []
    );
    return getViewToDisplay()
}
