import React,{ Component } from 'react';
import Typed from 'react-typed';

const TypedMessage = () => {
    return (
        <div className="typed-message">
            <Typed
                strings={["<span style='color:whitesmoke'>Applications</span>",
                "<span style='color:whitesmoke'>Websites</span>"]}
                typeSpeed={60}
                backSpeed={30}
                loop
                style={{color:'rgb(0, 166, 255)'}}
            />
            <br/>
        </div>
    )
}

export default TypedMessage;