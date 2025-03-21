// write code for Welcome component here

import React from "react";

const Welcome = ({name}) => {
    return (
        <div>
            <h1>Hey! {name}</h1>
            <h2>Welcome to School</h2>
            <p>We are excited to have you here.</p>
        </div>
    )
}

export default Welcome;