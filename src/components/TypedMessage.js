import React from 'react';
import Typed from 'react-typed';

const TypedMessage = (props) => {
    let typed1 = props.langFile.typedMessage.typed1;
    let typed2 = props.langFile.typedMessage.typed2;

    return (
        <div className="typed-message">
            <Typed
                strings={[typed1,
                    typed2]}
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