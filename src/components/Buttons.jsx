import React from 'react';
import { Button } from 'reactstrap';

function Buttons({ color,clickHandler, btnText, className }) {
    return (
        <div>
            <Button 
                color={color}
                onClick={clickHandler}
                className={className}
                >{btnText}
            </Button>
        </div>
    );
}

export default Buttons;