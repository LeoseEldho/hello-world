import React from "react";

let UserContent=React.createContext("marvel")

let UserProvider=UserContent.Provider
let UserConsumer=UserContent.Consumer

export{UserProvider,UserConsumer}
export default UserContent