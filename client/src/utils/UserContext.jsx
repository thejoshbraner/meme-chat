import React from "react";

const UserContext = React.createContext({
    username: "",
    setUserData: () => {},
});

export default UserContext;
